const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');

const OrderModel = sequelize.define('order', {
    idBD: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    chatId: {type: DataTypes.INTEGER, unique: false},
    username:{type: DataTypes.STRING, unique: false},
    idProd: {type: DataTypes.STRING, unique: false},
    amount: {type: DataTypes.INTEGER, unique: false, defaultValue: 1},
    isBuy: {type: DataTypes.BOOLEAN, unique: false, defaultValue: false},
    categoryCount: {type: DataTypes.INTEGER, unique: false},
    subcategoryCount: {type: DataTypes.STRING, unique: false}
})

module.exports = OrderModel;