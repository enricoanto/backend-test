const moongose = require('mongoose');

const SessionSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
})

const Session = moongose.model('session', SessionSchema)
module.exports = Session