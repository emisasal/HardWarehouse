const CartServices = require('../services/Cart');

class CartController {
  static async newCartItem(req, res) {
    const { id } = req.params;
    const { error, response } = await CartServices.newCartItem(id, req.body);
    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
  static async removeCartItem(req, res) {
    const { id, productId } = req.params;
    const { error, response } = await CartServices.removeCartItem(id, productId);
    if (error) return res.status(400).send(response);
    return res.status(200).send(response)
  }
  static async modifyQuantity(req, res) {
    const { id } = req.params;
    const { error, response } = await CartServices.modifyQuantity(id, req.body);
    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
  static async confirmBuy (req , res) {
    const { id } = req.params;
    const { error , response } = await CartServices.confirmBuy(id);
    if (error) return res.status(400).send(response);
    return res.status(201).send(response);
  }
}

module.exports = CartController;
