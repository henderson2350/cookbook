const router = require("express").Router();
const { User, Recipe } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User
        },
      ],
    });
    const recipes = recipeData.map((recipe) => {
      return recipe.get({ plain: true });
    });

    res.render("homepage", {
      recipes,
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
          attributes: "username",
        },
      ],
    });

    const recipe = recipeData.get({ plain: true });
    res.render("individual-recipe", { recipe });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {model: Recipe}
      ]
    })
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user});
  } catch (err) {
    res.status(500)
  }
})

router.get("/myprofile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{ model: Recipe}]
    })

    const user = userData.get({ plain: true})

    res.render("my-profile", {
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500)
  }
  
});

// router.get('/myprofile', async (req, res) => {
//   try {
//     const userData = await User.findOne({where: {id: req.params.id}}, {
//       include: [
//         {
//           model: Recipe,
//           attributes: name, ingredients, instructions
//         }
//       ]
//     })
//     const user = userData.get({plain: true})
//     res.render('my-profile', {user})
//   } catch (err) {
//     res.status(500).json(err)
//   }
//   res.render('my-profile')
// })

// router.get('/profile', async (req, res) => {
//   try {
//     const userData = await User.findOne({where: {id: req.session.id}}, {
//       include: [
//         {
//           model: Recipe,
//           attributes: name, ingredients, instructions
//         }
//       ]
//     })

//     const user = userData.get({plain: true})
//     res.render('profile', {user})
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

router.get("/create", async (req, res) => {
  try {
    res.render("create-post");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
