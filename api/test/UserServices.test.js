const  mongoose = require("mongoose");

const UserServices = require("../services/User")

describe("Se espera que", () => {

    beforeAll(async () => {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Hard-warehouse-test")
    });

    const user_1 = {
        fullName: "Manfredi",
        email: "manfredi@mail.com",
        password: "1234",
    }
    const user_2 = {
        fullName: "Gustavo",
        email: "Gustavo@mail.com",
        password: "1234",
        admin: true
    }
    const user_3 = {
        fullName: "Fernando",
        email: "Fernando@mail.com",
        password: "1234",
        admin: true
    }
    const user_4 = {
        fullName: "Santiago",
        email: "Santiago@mail.com",
        password: "1234",
        admin: true
    }


    test("El metodo register registre un usuario en la db", async () => {
        const { response } = await UserServices.register(user_1)

        expect(response.id).not.toBeNull()
        expect(response.fullName).toBe(user_1.fullName)
        expect(response.email).toBe(user_1.email)
        expect(response.password).not.toEqual(user_1.password)
    })

    test("El metodo updateUser debe actualizar al usuario", async () => {
        const { response } = await UserServices.register(user_2)
        const updatedUser = await UserServices.updateUser(response.id, { fullName: "Santiago Orlando" })

        expect(updatedUser.response.id).toEqual(response.id)
        expect(updatedUser.response.fullName).toEqual("Santiago Orlando")
        expect(updatedUser.response.email).toEqual(response.email)
    })

    test("El metodo updateAdmin debe actualizar al usuario", async () => {
        const { response } = await UserServices.register(user_3)
        const updatedUser = await UserServices.updateUser(response.id, { fullName: "Santiago Orlando" })

        expect(updatedUser.response.id).toEqual(response.id)
        expect(updatedUser.response.fullName).toEqual("Santiago Orlando")
        expect(updatedUser.response.email).toEqual(response.email)
        expect(updatedUser.response.admin).toEqual(true)
    })

    test("El metodo getUsers debe traer todos los usuarios de la base de datos", async () => {
        const { response } = await UserServices.getUsers()

        expect(response.length).toBeGreaterThanOrEqual(2)
    })

    test("El metodo deleteUser debe eliminar a un usuario", async () => {
        const { response } = await UserServices.register(user_4)
        const { error } = await UserServices.deleteUser(response.id)
        const users = await UserServices.getUsers()
        const user4 = users.response.filter( user => user.id === response.id)
        
        expect(user4[0]).toBeUndefined()
        expect(error).toEqual(false)
    })

    afterAll(async () => {
        const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/Hard-warehouse-test")
        await connection.dropDatabase()
    })
})