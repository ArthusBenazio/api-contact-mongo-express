const router = require('express').Router();

const contactRouter = require('./contact');

router.use('/', contactRouter);

module.exports = router;