const db = require('../db');
const {DataTypes} = require('sequelize');

const User = db.define('User', {
    //The id will be auto_incremental

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fav_genre: {
        type: DataTypes.STRING
    },
    shows_wateched: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
})

module.exports = User