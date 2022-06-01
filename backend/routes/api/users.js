const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Album, Comment, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


// * ——————————————————————————————————————————————————————————————————————————————————
// *                                    Albums
// * ——————————————————————————————————————————————————————————————————————————————————

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                          GET ALL IMAGES OF A USER
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.get('/:id(\\d+)/images', asyncHandler(async (req, res) => {
  const userId = await parseInt(req.params.id, 10);

  const images = await Image.findAll({
    where: { userId },
  });

  return res.json({ images });
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                          GET ALL LIKED IMAGES OF A USER
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.get('/:id(\\d+)/album', asyncHandler(async (req, res) => {
  const likedUserId = await parseInt(req.params.id, 10);

  const likedImages = await Image.findAll({
    include: [{
      model: Album, where: { likedUserId }
    }, User, Comment
    ]
  }
  );

  return res.json({ likedImages });
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                          CHECK IF IMAGE EXISTS IN ALBUM OF CURRENT USER
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.get('/:id(\\d+)/images/:imageId(\\d+)/album', asyncHandler(async (req, res) => {
  const userId = await parseInt(req.params.id, 10);
  const imageId = await parseInt(req.params.imageId, 10);

  const album = await User.findAll({
    where: { userId, imageId },
  });

  if (album.length === 0) {
    return res.status(404).json({
      message: 'Image not found in album.'
    });
  }

  return res.json({ album });
}));


// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                          ADD IMAGE TO ALBUM OF CURRENT USER
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.post('/:id(\\d+)/images/:imageId(\\d+)/album', asyncHandler(async (req, res) => {
  const albumUserId = await parseInt(req.params.id, 10);
  const imageId = await parseInt(req.params.imageId, 10);

  await Album.create({ albumUserId, imageId });

  const image = await Image.findByPk(imageId);

  return res.json({ message: 'Image added to album.', image });
}));

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                          REMOVE IMAGE FROM ALBUM OF CURRENT USER
// TODO ——————————————————————————————————————————————————————————————————————————————————

router.delete('/:userId(\\d+)/images/:imageId(\\d+)/album', asyncHandler(async (req, res) => {
  const userId = await parseInt(req.params.id, 10);
  const imageId = await parseInt(req.params.imageId, 10);

  const album = await Album.findOne({
    where: { userId, imageId }
  });

  if (!album) return res.status(404).json({ message: 'Failed: Image not found in album.' });

  await album.destroy();

  return res.json({ message: 'Image removed from album.' });

}));

module.exports = router;
