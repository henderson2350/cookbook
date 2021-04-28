const router = require('express').Router();
const { User, Recipe } = require('../models');

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const recipes = recipeData.map((recipe) => {
      recipe.get({ plain: true });
    });
    res.render("homepage", {
      recipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: 'username'
        }
      ]
    })
  } catch (err) {
    res.status(500).json(err)
  }
  res.render('individual-recipe', {recipeData})
})

router.get('/userpage', async (req, res) => {
  try {
    const userData = User.findAll({
      include: [{
        model: Recipe,
        attributes: name, ingredients, instructions
      }]
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router