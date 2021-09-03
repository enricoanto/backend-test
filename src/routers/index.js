const router = require('express').Router()
const userRouter = require('./userRouter');
const productRouter = require('./productRouter')
const Auth = require('../middlewares/authentication');
const orderRouter = require('./oderRouter')

router.use(userRouter);
router.use(Auth.authentication)
router.use(productRouter);
router.use(orderRouter)

module.exports = router