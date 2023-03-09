const UserService = require("../services/userService")

class UserController {
    async Registration(req, res, next) {
        try
        {
            const {chatId, isAdmin} = req.body;
            console.log(chatId + " " + isAdmin)
            await UserService.Registration(chatId,isAdmin)
            res.json(true)

        }catch (e)
        {
            next(e)
        }
    }

    async Login(req, res, next) {
        try {
            const {chatId} = req.body
            const answer = await UserService.Login(chatId);
            res.json(answer)
        } catch (e) {
            next(e)
        }
    }
    async getUsers(req,res,next)
    {
        try
        {
            const users = await UserService.getUsers();
            res.json(users)
        }catch (e)
        {
            next(e)
        }
    }
}

module.exports = new UserController()