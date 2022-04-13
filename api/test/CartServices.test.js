const  mongoose = require("mongoose");

const UserServices = require("../services/User")
const ProductsServices = require("../services/Products")
const CartServices = require("../services/Cart")

describe("Se espera que", () => {

    beforeAll(async () => {
        
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Hard-warehouse-test")

    });

    const product_1 = {
        title: "mueble 1",
        author: "Santiago Orlando",
        category: "muebles",
        stock: 5,
        price: 200,
    }

    const product_2 = {
        title: "mueble 2",
        author: "Fernando LeonHart",
        category: "procesadores",
        stock: 15,
        price: 200,
    }

    const product_3 = {
        title: "mueble 3",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
    }

    const user_1 = {
        fullName: "manfredi",
        email: "manfredi@gmail.com",
        password: "1234",
    }

    const user_2 = {
        fullName: "Santiago Orlando",
        email: "Orlando@mail.com",
        password: "1234",
    }

    const user_3 = {
        fullName: "Fernando Leonhart",
        email: "Leonhart@mail.com",
        password: "1234",
    }

    const user_4 = {
        fullName: "Gustavo Retamozo",
        email: "Retamozo@mail.com",
        password: "1234",
    }

    test("El metodo newCartItem añada un producto al carrito del usuario", async () => {

        const { response } = await UserServices.register(user_1)
        const product1 = await ProductsServices.newProduct(product_1)
        const product2 = await ProductsServices.newProduct(product_2)
        const product3 = await ProductsServices.newProduct(product_3)

        const dataProduct1 = {
            productId: product1.response.id,
            cantidad: 2,
            price: product1.response.price,
            title: product1.response.title,
            image: product1.response.image
        }

        const dataProduct2 = {
            productId: product2.response.id,
            cantidad: 2,
            price: product2.response.price,
            title: product2.response.title,
            image: product2.response.image
        }

        const dataProduct3 = {
            productId: product3.response.id,
            cantidad: 10,
            price: product3.response.price,
            title: product3.response.title,
            image: product3.response.image
        }

        const userWithOneItem = await CartServices.newCartItem(response.id, dataProduct1)
        const userWithTwoItems = await CartServices.newCartItem(response.id, dataProduct2)
        const userWithThreeItems = await CartServices.newCartItem(response.id, dataProduct3)


        expect(userWithOneItem.response.carrito.length).toEqual(1)
        expect(userWithOneItem.response.carrito[0].product).toEqual(product1.response.id)
        expect(userWithOneItem.response.carrito[0].title).toEqual(product1.response.title)

        expect(userWithTwoItems.response.carrito.length).toEqual(2)
        expect(userWithTwoItems.response.carrito[1].product).toEqual(product2.response.id)
        expect(userWithTwoItems.response.carrito[1].title).toEqual(product2.response.title)

        expect(userWithThreeItems.response).toEqual("Insufficient Stock!")
        expect(userWithThreeItems.error).toEqual(true)

    })

    test("El modulo removeCartItem elimine elementos del carrito", async () => {

        const { response } = await UserServices.register(user_2)

        const product1 = await ProductsServices.newProduct(product_1)
        const product2 = await ProductsServices.newProduct(product_2)

        const dataProduct1 = {
            productId: product1.response.id,
            cantidad: 2,
            price: product1.response.price,
            title: product1.response.title,
            image: product1.response.image
        }

        const dataProduct2 = {
            productId: product2.response.id,
            cantidad: 2,
            price: product2.response.price,
            title: product2.response.title,
            image: product2.response.image
        }

        const userWithOneItem = await CartServices.newCartItem(response.id, dataProduct1)
        const userWithTwoItems = await CartServices.newCartItem(response.id, dataProduct2)

        const userWithoutOneItem = await CartServices.removeCartItem(response.id, product1.response.id)
        const userWithoutTwoItems = await CartServices.removeCartItem(response.id, product2.response.id)

        const TryToProduceARrror = await CartServices.removeCartItem(response.id, product2.response.id)


        expect(userWithoutOneItem.response.carrito.length).toEqual(1)
        expect(userWithoutTwoItems.response.carrito.length).toEqual(0)

        expect(TryToProduceARrror.response.carrito.length).toEqual(0)
        expect(TryToProduceARrror.error).toEqual(false)
    })

    test("El metodo modifyQuantity debe modificar la cantidad del producto en el carrito", async () => {
        
        const { response } = await UserServices.register(user_3)

        const product1 = await ProductsServices.newProduct(product_1)
        const dataProduct1 = {
            productId: product1.response.id,
            cantidad: 2,
            price: product1.response.price,
            title: product1.response.title,
            image: product1.response.image
        }

        const userWithOneItem = await CartServices.newCartItem(response.id, dataProduct1)

        dataProduct1.cantidad = 5
        const modifiedQuantity = await CartServices.modifyQuantity(response.id, dataProduct1)

        expect(modifiedQuantity.response.carrito[0].cantidad).toEqual(5)

    })

    test("El metodo confirmBuy debe pasar todo el carrito al historial.", async () => {

        const { response } = await UserServices.register(user_4)

        const product1 = await ProductsServices.newProduct(product_1)
        const dataProduct1 = {
            productId: product1.response.id,
            cantidad: 2,
            price: product1.response.price,
            title: product1.response.title,
            image: product1.response.image
        }

        const userWithOneItem = await CartServices.newCartItem(response.id, dataProduct1)

        const confirmedBuy = await CartServices.confirmBuy(response.id)


        expect(confirmedBuy.response.history[0][0].product).toEqual(product1.response.id)
        expect(confirmedBuy.response.carrito[0]).toBeUndefined()

    })

    afterAll(async () => {
        const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/Hard-warehouse-test")
        await connection.dropDatabase()
    })
})