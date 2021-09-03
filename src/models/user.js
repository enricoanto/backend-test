const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

const User = moongose.model('user', UserSchema)
module.exports = User