const bcrypt = require('bcrypt');

class Bcrypt {
    static hashPassword (password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hash(password, salt)
        return hash
    }
    static comparePassword(password, hash) {
        const compare = bcrypt.compareSync(password, hash);
        return compare
    }
}

module.exports= Bcrypt