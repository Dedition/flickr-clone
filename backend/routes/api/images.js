const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { check, validationResult } = require('express-validator');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

const { Image, User, Comment } = require('../../db/models');

const { Image } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll({
        order: [['createdAt', 'DESC']], include: [User]
    });
    res.json(images);
}));

const validateImage = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name.')
        .isLength({ max: 100 })
        .withMessage('Name cannot be more than 100 characters.'),
];

// const validateImage = [
//     check('title').isLength({ min: 1 }).withMessage('Title is required')
// ];

// post an image
router.post('/', singleMulterUpload("image"), validateImage, asyncHandler(async (req, res) => {
    const { name, content, userId } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    const image = await Image.create({ name, userId, imageUrl, content });

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(422).json({ errors: validationErrors.array() });
    } else {
        await image.save();
        res.json(image);
    }
}));

// edit an image
router.put('/:id(\\d+)', validateImage, asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    let image = await Image.findByPk(imageId);

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(422).json({ errors: validationErrors.array() });
    } else {
        await image.update(req.body);
        const newImage = await Image.findByPk(imageId, {
            include: User
        });
        res.json(newImage);
    }
}));

// delete an image
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const image = await Image.findByPk(req.params.id);
    await image.destroy();
    return res.json(image.id);
}
));

// get comments of a photo
router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await Image.findByPk(imageId, {
        include: [
            { model: Comment, include: User }
        ]
    });
    res.json(image);
}
));

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment.')
        .isLength({ min: 1, max: 1000 })
        .withMessage('Comment must be between 1 and 1000 characters.'),
];

// post a comment
router.post('/:id(\\d+)/comments', validateComment, asyncHandler(async (req, res) => {
    const { userId, imageId, content } = req.body;

    const validatorErrors = validationResult(req);

    let comment = await Comment.build({
        userId,
        imageId,
        content
    });

    if (!validatorErrors.isEmpty()) {
        return res.status(422).json({ errors: validatorErrors.array() });
    } else {
        await comment.save();
        comment = await Comment.findByPk(comment.id, {
            include: User
        });
        res.json(comment);
    }
}
));

module.exports = router;
