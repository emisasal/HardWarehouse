const  mongoose = require("mongoose");


const ProductsServices = require("../services/Products")
const UserServices = require("../services/User")


describe("Se espera que", () => {

    beforeAll(async () => {
        
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Hard-warehouse-test")

    });
    

    const product_1 = {
        title: "Ryzen 5 3600x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: [ 'procesador', 'amd', 'serie 3000' ]
    }

    const product_2 = {
        title: "Ryzen 5 3600x",
        author: "Fernando LeonHart",
        category: "procesadores",
        stock: 15,
        price: 200,
        tags: ["procesador", "amd", "serie 3000"]
    }

    const product_3 = {
        title: "Ryzen 7 3700x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: ["procesador", "amd", "serie 3000"]
    }

    const product_4 = {
        title: "Ryzen 5 5600x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: ["procesador", "amd", "serie 5000"]
    }

    const product_5 = {
        title: "Nvidia 2070s",
        author: "Santiago Orlando",
        category: "Grafica",
        stock: 5,
        price: 200,
        tags: ["grafica", "nvidia", "serie 2000"]
    }

    const user_1 = {
        fullName: "Mar Cortina",
        email: "Cortina@mail.com",
        password: "1234"
    }

    test("el metodo newProduct cree un producto", async () => {

        const { response } = await ProductsServices.newProduct(product_1)
        
        expect(response.title).toBe(product_1.title)
        expect(response.author).toBe(product_1.author)
        expect(response.category).toBe(product_1.category)
        expect(response.stock).toBe(product_1.stock)
        expect(response.price).toBe(product_1.price)
        expect(response.tags[0]).toBe(product_1.tags[0])
    })

    test("el metodo getProduct debe traer un producto con su id", async () => {

        const { response } = await ProductsServices.newProduct(product_2)
        const producto = await ProductsServices.getProduct(response.id)
        
        expect(producto.response.id).toBe(response.id)
    })

    test("el metodo getProducts debe traer un muchos productos dentro de docs", async () => {
        
        const { response } = await ProductsServices.getProducts()

        expect(response.docs.length).toEqual(2)
    })

    test("el metodo searchByTitle debe traer productos que contengan la palabra pasada", async () => {

        const product3 = await ProductsServices.newProduct(product_3)
        const ryzenProducts = await ProductsServices.searchByTitle(1,"Ryzen")
        const nvidiaProducts = await ProductsServices.searchByTitle(1,"Nvidia")

        expect(ryzenProducts.response.docs.length).toEqual(3)
        expect(nvidiaProducts.response.docs.length).toEqual(0)
    })

    test("el metodo updateProduct debe traer un producto con sus respectivos cambios", async () => {

        const { response } = await ProductsServices.newProduct(product_4)
        let producto4 = await ProductsServices.getProduct(response.id)
        producto4.response.price = 250
        const producto4Updated = await ProductsServices.updateProduct(response.id, producto4.response)
        
        expect(producto4Updated.response.price).toBe(250)
    })

    test("el metodo deleteProduct debe retornar un objeto error en false", async () => {
        
        const { response } = await ProductsServices.newProduct(product_1)
        const { error } = await ProductsServices.deleteProduct(response.id)
        const producto4 = await ProductsServices.getProduct(response.id)
        expect(error).toBe(false)
        expect(producto4.response).toBeNull()
    })

    test("el metodo reviewProduct debe agregar una review a un producto", async () => {

        const { response } = await ProductsServices.newProduct(product_1)
        const user = await UserServices.register(user_1)

        const reviewedProduct = await ProductsServices.reviewProduct(response.id, {
            user: user.response.id,
            valueReview: 9,
            review: "Ta Buenisimo locooo!"
        })

        // Con Id inexistente.
        const badId = await ProductsServices.reviewProduct(1, {
            user: user.response.id,
            valueReview: 9,
            review: "Ta Buenisimo locooo!"
        })
        
        const sameUser = await ProductsServices.reviewProduct(response.id, {
            user: user.response.id,
            valueReview: 8,
            review: "Ta Buenisimo locoo!"
        })

        expect(reviewedProduct.response.rating[0].user).toBe(user.response.id)
        expect(reviewedProduct.response.rating[0].valueReview).toBe(9)
        expect(reviewedProduct.response.rating[0].review).toBe("Ta Buenisimo locooo!")

        expect(badId.response).not.toBeNull()
        expect(badId.error).toEqual(true)

        expect(sameUser.response).toBe("The user has a review already!")
        expect(sameUser.error).toEqual(true)

    })

    test("El metodo searchByTags busque por cualquier cantidad de tags", async () => {
        const procesadores = await ProductsServices.searchByTags(1, ["procesador"])
        const serie3000 = await ProductsServices.searchByTags(1, ["serie 3000"])
        const procesadoresYSerie3000 = await ProductsServices.searchByTags(1, ["procesador", "serie 3000"])
        const nvidia = await ProductsServices.searchByTags(1, ["nvidia", "procesador", "serie 2000"])

        console.log(procesadores.response.docs);

        expect(procesadores.response.docs.length).toEqual(5)
        expect(serie3000.response.docs.length).toEqual(4)
        expect(procesadoresYSerie3000.response.docs.length).toEqual(4)
        expect(nvidia.response.docs.length).toEqual(0)
    })

    afterAll(async () => {
        const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/Hard-warehouse-test")
        await connection.dropDatabase()
    })
})
