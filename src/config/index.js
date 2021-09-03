const mongoose = require('mongoose');
const db = "mongodb+srv://enricoanto:enricoanto@cluster0.7wwwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = async ()=> {
    try {
        await mongoose.connect(db)
        console.log('mongoDB connecting ...')
    } catch (err) {
        console.log(err.message)
    }
}

