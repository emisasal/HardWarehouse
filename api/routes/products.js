const router = require("express").Router()
const ProductsController = require("../controllers/Products")
const { isAdmin } = require("../middleware/isAdmin")

router.get("/showProducts", ProductsController.getProducts)
router.get("/showCategoryProducts", ProductsController.getProductsByCategory)
router.get("/showOne/:id", ProductsController.getProduct)
router.get("/searchByTitle/:title", ProductsController.searchByTitle)
router.get("/searchByTags", ProductsController.searchByTags)

router.post("/add", isAdmin , ProductsController.newProduct)
router.post("/rating/:id", ProductsController.reviewProduct)

router.put("/update/:id", isAdmin, ProductsController.updateProduct)

router.delete("/delete/:id", isAdmin, ProductsController.deleteProduct)


module.exports = router
