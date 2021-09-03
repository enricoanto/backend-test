const { Order, Product, User } = require('../models')

class OrderController {
    static async addOrderProduct(req, res, next) {
        const orderParams = req.params.product_id
        const quantity = +req.body.quantity
        
        try {
            const product = await Product.findById(orderParams);
            const order = {
                product: product.name,
                quantity,
                total_price: quantity * product.price,
                user_id: req.sessionToken._id
            }
            const addOrder = new Order(order)
            await addOrder.save()
            res.status(201).json(order)
        } catch (err) {
            console.log(err)
        }
    }
    static async findAllOrder (req, res, next) {
        try {
            const orders = await Order.find({user_id: req.sessionToken._id})
            res.status(200).json(orders)
        }catch (err) {
            console.log(err)
        }
    }
}

module.exports = OrderController