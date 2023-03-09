const Router = require('express');
const UserController = require('../controllers/userController')
const {body} = require("express-validator");
const router = new Router();

router.post('/register',body("chatId"),body("isAdmin"), UserController.Registration)
router.post("/login", body("chatId"), UserController.Login)
router.get('/users', UserController.getUsers)

module.exports = router