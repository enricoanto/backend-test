const {Product} = require('../models')

class ProductController {
    static async findAllProducts(req, res, next) {
        try {
            const products = await Product.find({})
            res.status(200).json(products)
        }catch (err) {
            console.log(err)
        }
    }
}

module.exports = ProductController