const router = require("express").Router()

const routerProducts = require("./products")
const routerUsers = require("./users")
const routerAuth = require("./auth")
const routerCart = require("./cart")

router.use("/products", routerProducts)
router.use("/users", routerUsers)
router.use("/auth", routerAuth)
router.use("/cart", routerCart)

module.exports = router