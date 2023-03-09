const Router = require('express');
const OrderController = require('../controllers/orderController')
const {body} = require("express-validator");
const router = new Router();

router.post('/accept',body("idBD"), body("chatId"), OrderController.AcceptOrder)
router.post('/remove', body("idBD"), body("chatId"), OrderController.RemoveOrder)
router.post('/create', body("chatId"),body("username"),body("id"),body("idProd"), body("categoryCount"), body("subcategoryCount"), OrderController.CreateOrder)
router.get('/getOrder', body("idBD"), OrderController.getOrder)
router.get('/getOrders', OrderController.getOrders)
module.exports = router