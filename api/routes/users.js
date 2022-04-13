const router = require("express").Router()
const passport = require("passport")

const UserController = require("../controllers/Users")
const { isAdmin } = require("../middleware/isAdmin")
const { isAuth } = require("../middleware/isAuth")

router.post("/login", passport.authenticate("local"), UserController.login)
router.post("/register", UserController.register)
router.post("/logout", isAuth, UserController.logout)
router.put("/updateUser/:id", isAuth, UserController.updateUser)
router.get("/me", UserController.me)
router.put("/updateAdmin/:id", isAdmin, UserController.updateAdmin)
router.delete("/deleteUser/:id", isAdmin, UserController.deleteUser)
router.get("/getUsers", isAdmin, UserController.getUsers)

module.exports = router

