const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { check, validationResult } = require('express-validator');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

const { Image, User, Comment } = require('../../db/models');

// * ——————————————————————————————————————————————————————————————————————————————————
// *                                    Images
// * ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 VALIDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————
const validateImage = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name.')
        .isLength({ max: 100 })
        .withMessage('Name cannot be more than 100 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.')
        .isLength({ max: 100 })
        .withMessage('Description cannot be more than 100 characters.'),
    check('location')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a location.')
        .isLength({ max: 30 })
        .withMessage('Location cannot be more than 30 characters.'),
];

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 CREATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.post('/', singleMulterUpload("image"), validateImage, asyncHandler(async (req, res) => {
    const { name, content, location, userId } = req.body;
    const AWSImageUrl = await singlePublicFileUpload(req.file);
    const validationErrors = validationResult(req);

    const image = await Image.create({
        name,
        userId,
        location,
        content,
        imageUrl: AWSImageUrl
    });

    if (!validationErrors.isEmpty()) {
        return res.status(422).json({ errors: validationErrors.array() });
    } else {
        await image.save();
        res.json(image);
    }
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————
// load all images
router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll({
        order: [['createdAt', 'DESC']], include: [User]
    });
    console.log('HELLO FROM ROUTES/API/IMAGES.JS');
    res.json(images);
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 UPDATE
// TODO ——————————————————————————————————————————————————————————————————————————————————
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

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 DELETE
// TODO ——————————————————————————————————————————————————————————————————————————————————
router.delete('/:id/', requireAuth, asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await Image.findByPk(imageId);
    await image.destroy();
    return res.json(imageId);
}));

// * ——————————————————————————————————————————————————————————————————————————————————
// *                                    Comments
// * ——————————————————————————————————————————————————————————————————————————————————


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
// TODO                                 CREATE
// TODO ——————————————————————————————————————————————————————————————————————————————————

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

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                 READ
// TODO ——————————————————————————————————————————————————————————————————————————————————

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


module.exports = router;
