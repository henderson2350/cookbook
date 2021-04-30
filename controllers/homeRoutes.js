const router = require("express").Router();
const { User, Recipe, Follow } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    const recipes = recipeData.map((recipe) => {
      return recipe.get({ plain: true });
    });

    const randomNumber = Math.floor(Math.random() * recipeData.length);
    const randomRecipe = recipes[randomNumber];

    console.log(randomRecipe);

    res.render("explore", {
      recipes,
      randomRecipe,
      loggedIn: req.session.logged_in,
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

router.get("/recipe/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const recipe = recipeData.get({ plain: true });
    res.render("individual-recipe", {
      recipe,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }],
    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500);
  }
});

router.get("/myprofile", async (req, res) => {
 console.log("please work")
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }, { model: Follow }],
    });
    
    const user = userData.get({ plain: true });

    res.render("my-profile", {
      ...user,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", withAuth, async (req, res) => {
  try {
    res.render("create-post", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/feed", withAuth, (req, res) => {
  try {
    res.render("feed", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
