const User = require('./User')
const Recipe = require('./Recipe')
const Comment = require('./Comment')
const { Model } = require('sequelize');
const Follow = require('./Follow');



User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.belongsToMany(User, { 
    through: Follow, as: 'Followers', 
    foreignKey: 'follower'
});

User.belongsToMany(User, { 
    through: Follow, as: 'Following', 
    foreignKey: 'following'});

// User.hasMany(Follow, { foreignKey: 'following' });
// // User.hasMany(Follow, { foreignKey: 'follower' });

Follow.belongsTo(User, { foreignKey: 'following', as: 'Following' });
Follow.belongsTo(User, { foreignKey: 'follower', as: 'Follower' });

module.exports = { User, Recipe, Comment, Follow}