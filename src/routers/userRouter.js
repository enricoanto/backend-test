const router = require('express').Router();
const UserController = require('../controllers/userController.js');
const Auth = require('../middlewares/authentication');


router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.post('/logout', Auth.authentication, UserController.logout)

module.exports = router