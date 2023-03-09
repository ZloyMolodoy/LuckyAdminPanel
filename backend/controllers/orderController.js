const OrderService = require('../services/orderService')
class OrderController
{
    async CreateOrder(req,res,next)
    {
        try
        {
            const {chatId, username,idProd, categoryCount, subcategoryCount} = await req.body

            const answer = await OrderService.Create(chatId,username,idProd,categoryCount,subcategoryCount)

            res.json(answer)

        }catch (e) {
            next(e)
        }
    }
    async getOrder(req,res,next)
    {
        try
        {
            const {idBD} = await req.body

            const answer = await OrderService.getOrder(idBD);
            res.json(answer)
        }catch (e) {
            next(e)
        }
    }
    async getOrders(req,res,next)
    {
        try {
            const answer = await OrderService.getOrders();
            res.json(answer)
        }catch (e) {
            next(e)
        }
    }
    async AcceptOrder(req, res, next)
    {
        try
        {
            const {idBD} = await req.body

            const answer = await OrderService.Accept(idBD);
            res.json(answer)
        }catch (e) {
            next(e)
        }
    }
    async RemoveOrder(req, res, next)
    {
        try
        {
            const {idBD} = await req.body

            const answer = await OrderService.Remove(idBD)
            return res.json(answer)
        }catch (e) {
            next(e)
        }
    }
}

module.exports = new OrderController()