const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');

const UserModel = sequelize.define("users", {
    chatId: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    isAdmin: {type: DataTypes.BOOLEAN, unique: false},
    lastIDBD: {type: DataTypes.INTEGER, unique: false, defaultValue: 0},
    count: {type: DataTypes.INTEGER, unique: false, defaultValue: 1},
    categoryCount: {type: DataTypes.INTEGER, unique: false},
    subcategoryCount: {type: DataTypes.STRING, unique: false},
} )

module.exports = UserModel;