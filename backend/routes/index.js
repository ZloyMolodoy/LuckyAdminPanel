const Router = require('express').Router;
const router = new Router();
const userRoute = require('./userRoute')
const orderRoute = require('./orderRoute')


router.use('/users', userRoute)
router.use('/order', orderRoute)


module.exports = router