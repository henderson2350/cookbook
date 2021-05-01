const router = require('express').Router();
const { response } = require('express');
const { Comment, Recipe, User } = require('../../models');

router.post('/new', async (req, res) => {
    console.log('router');
    try {
        const newComment = Comment.create({
            ...req.body,
            recipe_id: req.session.recipe_id
        });
        if (response.ok) {
            res.status(200).json(newComment)
            console.log('comment');
        }    
    } catch (err) {
        res.status(400).json(err);
        console.log('Error');
    }
});


router.get('/:recipe/:user', async (req, res) => {
    try {
        const commentData = Comment.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['name'],
                    where: [{ user_id : req.params.user }, { recipe_id : req.params.recipe}],
                },
            ],
        });

        const comments = (await commentData).map((comment) => comment.get({ plain: true }));
        if (response.ok) {
            res.status(200).json(comments)
            console.log('comment');
        }    
    } catch (err) {
            res.status(400).json(err)
    }
})


router.delete('/:recipe/:user', async (req, res) => {
    try {
        const commentData = Comment.delete({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                    where: [{ user_id : req.params.user }, { recipe_id : req.params.recipe}],
                },
            ],
        });
        
        const comments = (await commentData).map((comment) => comment.get({ plain: true }));
        res.status(200).json(comments)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;