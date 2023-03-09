const sequelize = require('./db.js');
const express = require('express')
const bodyParser = require("body-parser")
const router = require("./routes/index.js")
const cors = require('cors')

const PORT = 5000;

const app = express()


//middle
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
app.use('/api', router)

const start = async() => {
    try
    {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`\n\n\n\n\n\nСервер подключен с портом ${PORT}\nПодключение к базе данных есть\n\n`))
    }catch (e)
    {
        console.log(e)
    }
}
start()