const router = require('express').Router();
const OrderController = require('../controllers/order.js');
const Auth = require('../middlewares/authentication');


router.use(Auth.authenticationSessions)
router.get('/order', OrderController.findAllOrder)
router.post('/order/:product_id', OrderController.addOrderProduct);


module.exports = router