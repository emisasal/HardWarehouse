
const { ProductModel } = require('../models/Products');
const { UserModel } = require('../models/Users');
const email = require("../config/nodemailer");


class CartServices {
  static async newCartItem(id, data) {
    try {
      const { productId, cantidad, price, image, title } = data;
      const productItem = await ProductModel.findById(productId);

      if (productItem.stock < cantidad) {
        return { error: true, response: "Insufficient Stock!" };
      }

      const user = await UserModel.findById(id);
      user.carrito.push({
        product: productId,
        cantidad: cantidad,
        price: price,
        title: title,
        image: image,
      });

      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      return {
        error: false,
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
  static async removeCartItem(id, productId) {
    
    try {
      const user = await UserModel.findById(id);
      user.carrito = user.carrito.filter(({ product }) => product !== productId);
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
     
      return {
        error: false,
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
  static async modifyQuantity(id, data) {
    try {
      const { productId, cantidad } = data;
      const user = await UserModel.findById(id);
      user.carrito = user.carrito.map((item) => {
        if (item.product === productId) {
          return (item.cantidad = cantidad);
        } else {
          return item;
        }
      });
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      return {
        error: false,
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async confirmBuy(id) {

      try {
        const user = await UserModel.findById(id)        
        user.history.push(user.carrito)
        user.carrito = []
        const updateProduct = await UserModel.findByIdAndUpdate(id , user, {new : true});
        email.sendMail(user)
        return {
          error: false,
          response: updateProduct,
        }
      } catch (error) {
        return {
          error: true,
          response: error,
        };
      }
    }
}

module.exports = CartServices;
