const router = require('express').Router();
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');


router.use('/recipe', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;