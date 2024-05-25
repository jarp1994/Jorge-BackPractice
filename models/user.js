const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');
const Post = require('./post');

const User = sequelize.define('User', {
    // Create your table here
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        },
    name: {
        type: DataTypes.STRING
        },
    email: {
        type: DataTypes.STRING
        },
    password: {
        type: DataTypes.STRING
        },
    },
{ timestamps: false }
)

// Relationships 
// One user can have many posts
User.hasMany(Post); 
Post.belongsTo(User);

module.exports = User;