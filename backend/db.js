const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'admins',
    'postgres',
    'postgres',
    {
        host:"localhost",
        port:"5432",
        dialect:"postgres"
    }
)