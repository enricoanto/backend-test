const router = require('express').Router();
const ProductController = require('../controllers/productController.js');


router.get('/product', ProductController.findAllProducts);


module.exports = router