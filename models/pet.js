const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const petModel = sequelize.define('pet', {
    pet_id: {type: Sequelize.INTEGER, autoIncrement: true,primaryKey: true},
    web_user_id: {type: Sequelize.INTEGER, allowNull: false},
    name: {type: Sequelize.STRING, allowNull: false},
    type: {type: Sequelize.STRING, allowNull: false}
}, {
    tableName: 'pet',
    timestamps: false,
    singular: 'web_user',
    plural: 'web_user'
});

const petType = sequelize.define('pet_type', {
    pet_type_id: {type: Sequelize.INTEGER, autoIncrement: true,primaryKey: true},
    type: {type: Sequelize.STRING, allowNull: false}
}, {
    tableName: 'pet_type',
    timestamps: false,
    singular: 'pet_type',
    plural: 'pet_type'
});


module.exports = petModel;