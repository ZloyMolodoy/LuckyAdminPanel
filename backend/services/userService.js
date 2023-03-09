const UserModel = require('../models/userModel.js')
const ApiError = require('../exceptions/ApiError.js')

class UserService {
    async Registration(chatId, isAdmin) {
        try
        {
            const candication = await UserModel.findOne({where: {chatId: chatId}})
            if (candication) {
                throw ApiError.BadRequest('Такой пользователь уже есть')
            } else {
                await UserModel.create({chatId: chatId, isAdmin: isAdmin})
            }
        }catch (e) {
            console.log(e)
        }
    }

    async Login(chatId) {
        const user = await UserModel.findOne({where: {chatId: chatId, isAdmin: true}})
        if (!user) {
            throw ApiError.NotFound("Такого администратора нет");
        }
        return true
    }
    async getUsers()
    {
        const users = await UserModel.findAll();

        if(users.length == 0)
        {
            throw ApiError.NotFound("Нету пользователей в базе данных")
        }else
        {
            return users;
        }
    }
}

module.exports = new UserService()