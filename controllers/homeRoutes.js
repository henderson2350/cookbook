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
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: 'username'
        }
      ]
    })

    const recipe = recipeData.get({ plain: true })
    res.render('individual-recipe', {recipe})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/myprofile', async (req, res) => {
  try {
    const userData = await User.findOne({where: {id: req.params.id}}, {
      include: [
        {
          model: Recipe,
          attributes: name, ingredients, instructions
        }
      ]
    })
    const user = userData.get({plain: true})
    res.render('my-profile', {user})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findOne({where: {id: req.session.id}}, {
      include: [
        {
          model: Recipe,
          attributes: name, ingredients, instructions
        }
      ]
    })

    const user = userData.get({plain: true})
    res.render('profile', {user})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/create', async (req, res) => {
  try {
    res.render('create-post')
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
