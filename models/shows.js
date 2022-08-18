const db = require('../db');
const {DataTypes} = require('sequelize');

const Show = db.define('Show', {
    //The id will be auto_incremental

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Show