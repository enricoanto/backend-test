const moongose = require('mongoose');

const ProductSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
})

const Product = moongose.model('product', ProductSchema)
module.exports = Product