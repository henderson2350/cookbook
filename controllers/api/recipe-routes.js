const router = require('express').Router();
const { Recipe } = require("../../models");

router.post("/new", async (req, res) => {
    try {
        const newRecipe = Recipe.create(req.body);

    res.status(200).json(newRecipe);

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;