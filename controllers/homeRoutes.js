const router = require("express").Router();
const { User, Recipe, Follow, Comment } = require("../models");
const { findAll } = require("../models/User");
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

    const commentData = await Comment.findAll(
      {where: {recipe_id: req.params.id}})



    const recipe = recipeData.get({ plain: true });

    const comments = commentData.map((comment)=> comment.get({plain: true}))

      console.log(comments);

    res.render("individual-recipe", {
      recipe,
      comments,
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

    const followData = await Follow.findAll(
      {where: {follower: req.params.id},
    include: ["Following"],
  });

    const following = followData.map((follow) => follow.get({plain: true}))
    const user = userData.get({ plain: true });


    res.render("profile", {
      ...user,
      following,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500);
  }
});

router.get("/myprofile", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }],
    });
    
    const followData = await Follow.findAll(
      {where: {follower: req.session.user_id},
      include: ["Following"],
    });

    const user = userData.get({ plain: true });

    const following = followData.map((follow) => follow.get({plain: true}))
    console.log(user);
    console.log("-------------------------------")
    console.log(following);


    res.render("my-profile", {
      ...user,
      following,
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

router.get("/feed", withAuth, async (req, res) => {
  try {
    const followData = await Follow.findAll(
      {where: {follower: req.session.user_id}})

    const followers = followData.map((follower) => {
       return follower.get({plain: true})
      
    })
    
    const recipeData = await Recipe.findAll({ 
      include:[{model: User}]
      
    });

    const recipes = recipeData.map((recipe) => {
      return recipe.get({plain: true});
    })
    console.log(recipes);
    

    


    console.log(followers);
    res.render("feed", { followers, recipes, loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
