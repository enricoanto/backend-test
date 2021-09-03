const moongose = require('mongoose');

const OrderSchema = new moongose.Schema({
    product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

const Order = moongose.model('order', OrderSchema)
module.exports = Order