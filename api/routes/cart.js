const router = require('express').Router();
const CartController = require('../controllers/Cart');
const { isAuth } = require('../middleware/isAuth');

router.post('/add/:id', isAuth, CartController.newCartItem);
router.delete('/remove/:id/:productId', isAuth, CartController.removeCartItem);
router.post('/modify/:id', isAuth, CartController.modifyQuantity);
router.put('/buy/:id', CartController.confirmBuy);

module.exports = router;
