const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    // Create your table here
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
        },
    title: {
        type: DataTypes.STRING,
        allowNull: false
        },
    content: {
        type: DataTypes.STRING,
        allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Post