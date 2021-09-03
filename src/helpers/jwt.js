const jwt = require('jsonwebtoken');

class JWT {
    static signTokenSession (payload) {
        const token = jwt.sign(payload, "session")
        return token
    }
    static verifyTokenSession (token) {
        return jwt.verify(token, "session")
    }
    static signTokenAccess (payload) {
        const token = jwt.sign(payload, "access")
        return token
    }
    static verifyTokenAccess (token) {
        return jwt.verify(token, "access")
    }
}

module.exports = JWT