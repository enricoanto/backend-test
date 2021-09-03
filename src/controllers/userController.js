const { User, Session } = require('../models');
const JWT = require('../helpers/jwt');
const Bcrypt = require('../helpers/bcrypt');


class UserController {
    static async registerUser(req, res, next) {
        const {
            username, password
        } = req.body
        try {
            let user = await User.findOne({ username })
            if (user) {
                res.status(400).json({ name: "Bad Request", msg: "username already exist" })
            }
            
            user = new User({
                username, password
            })
            user.password = await Bcrypt.hashPassword(user.password)

            await user.save()
            res.status(201).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async loginUser(req, res, next) {
        const { username, password } = req.body
        try {
            if (!username || !password) {
                res.status(400).json({ name: "bad request", msg: "Username and password must be filled" })
            }
            const user = await User.findOne({ username })
            const session = await JWT.signTokenSession({ username })
            const newSession = new Session({username, code: session})
            await newSession.save()
            if (!user) {
                res.status(401).json({ msg: 'wrong password and username' })
            } else if (!Bcrypt.comparePassword(password, user.password)) {
                res.status(401).json({ msg: 'wrong password and username' })
            } else {
                const access_token = JWT.signTokenAccess({ username })
                res.status(201).json({ username, access_token })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async logout(req, res, next) {
        try {
            const user = req.userToken
            const deleteSession = await Session.deleteOne({username: user.username})
            res.status(200).json(deleteSession)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController