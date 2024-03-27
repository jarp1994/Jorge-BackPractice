const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');
const Post = require('./post.js');

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
User.hasMany(Post, { through: 'user_posts' }); //-->revisar
Post.belongsToMany(User, { through: 'user_posts' });

module.exports = User;