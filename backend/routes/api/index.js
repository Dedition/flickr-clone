const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images.js');
const commentsRouter = require('./comments.js');

// Use the routers here
// They will extend throughout the rest of your application
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/images', imagesRouter);

router.use('/comments', commentsRouter);

module.exports = router;
