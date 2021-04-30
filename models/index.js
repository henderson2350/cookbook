const User = require('./User')
const Recipe = require('./Recipe')
const { Model } = require('sequelize');
const Follow = require('./Follow');



User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})


User.belongsToMany(User, { through: Follow, as: 'Followers', foreignKey: 'follower'});
User.belongsToMany(User, { through: Follow, as: 'Following', foreignKey: 'following'});

// User.hasMany(Follow, { foreignKey: 'following' });
// // User.hasMany(Follow, { foreignKey: 'follower' });

// Follow.belongsTo(User, { foreignKey: 'following', as: 'Following' });
// // Follow.belongsTo(User, { foreignKey: 'follower', as: 'Follower' });

module.exports = { User, Recipe, Follow}