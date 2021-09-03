'use strict'
const jwt = require('../helpers/jwt')
const { User, Session } = require('../models')

class Auth {
    static async authentication(req, res, next) {
        const decoded = jwt.verifyTokenAccess(req.headers.access_token);
        try {
            const user = await User.findOne({ email: decoded.email })
            if (!user) {
                next({name: 'unauthorized'});
            }
            req.userToken = user
            next()
        } catch (err) {
           console.log(err)
        }
    }
    static async authenticationSessions(req, res, next) {
        const user = await Session.find({})
        const decoded = jwt.verifyTokenSession(user[0].code);
        try {
            const user = await User.findOne({ email: decoded.email })
            if (!user) {
                next({name: 'unauthorized'});
            }
            req.sessionToken = user
            next()
        } catch (err) {
           console.log(err)
        }
    }
}

module.exports = Auth