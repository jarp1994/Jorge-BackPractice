const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');
const Post = require('./post.js');

const User = sequelize.define('User', {
    // Create your table here
})

// Relationships 
// One user can have many posts
User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;