const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//User has posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//User has comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//Posts have comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

//Posts are tagged to a User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//Comments are tagged to a User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//Comments are tagged to a Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});






module.exports = { User, Post, Comment};