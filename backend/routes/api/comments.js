const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const { Image, User, Comment } = require('../../db/models');

// *    ——————————————————————————————————————————————————————————————————————————————————
// *                                    Comments
// *    ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 VALIDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment.')
        .isLength({ min: 1, max: 100 })
        .withMessage('Comment must be between 1 and 100 characters.'),
];
// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({ include: [User] });
    res.json(comments);
}
));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 UPDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.put('/:id(\\d+)', validateComment, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    let comment = await Comment.findByPk(commentId);
    console.log(commentId)
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        await comment.update(req.body);
        const newComment = await Comment.findByPk(commentId, {
            include: User
        });
        res.json(newComment);
    } else {
        res.status(422).json({ errors: validationErrors.array() });
    }
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 DELETE
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.delete('/:id/', requireAuth, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    console.log(comment);
    return res.json(commentId);
}));



module.exports = router;
