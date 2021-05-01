const router = require('express').Router();
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/comment', commentRoutes);
router.use('/recipe', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;