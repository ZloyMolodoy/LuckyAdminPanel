const OrderModel = require('../models/orderModel')
const ApiError = require('../exceptions/ApiError')
class OrderService
{
    async Create(chatId, username, idProd, categoryCount, subcategoryCount)
    {
        try
        {
            await OrderModel.create({chatId:chatId, username:username, idProd: idProd, categoryCount: categoryCount, subcategoryCount: subcategoryCount})

            return `Заказ для ${username} был успешно создан`
        }catch (e) {
            console.log(e)
        }
    }
    async getOrder(idBD)
    {
            const order = await OrderModel.findOne({where:{idBD:idBD}})
            if(order === null)
            {
                throw ApiError.NotFound("Нет такого заказа")
            }else
            {
                return order;
            }

    }
    async getOrders()
    {
        const orders = await OrderModel.findAll()
        if(orders === null)
        {
            throw ApiError.NotFound("Нет заказов")
        }else
        {
            return orders
        }
    }
    async Accept(idBD)
    {
        const order = await OrderModel.findOne({where:{idBD:idBD,isBuy:false}})
        if(order.length === 0)
        {
            throw ApiError.NotFound("Заказ не найден");
        }else
        {
            order.isBuy = true; order.save()
            return "Заказ подтвержден"
        }
    }
    async Remove(idBD)
    {
        const order = await OrderModel.findOne({where:{idBD:idBD,isBuy:false}})
        if(order.length === 0)
        {
            throw ApiError.NotFound("Заказ не найден")
        }else
        {
            const answer = `Заказ для ${order.username} был удален`
            order.destroy()
            return answer
        }
    }
}

module.exports = new OrderService()