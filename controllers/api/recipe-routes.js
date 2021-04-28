const router = require('express').Router();
const { Recipe, User } = require("../../models");

router.post("/new", async (req, res) => {
    try {
        const newRecipe = Recipe.create({
            ...req.body, 
            user_id: req.session.user_id
        });

    res.status(200).json(newRecipe);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const recipeData = Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        const recipes = (await recipeData).map((recipe) => recipe.get({ plain: true }));
        res.status(200).json(recipes)
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;