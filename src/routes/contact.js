const router = require('express').Router();

const contactRouter = require('../controllers/contactController');

router.route('/contact').post((req, res) => contactRouter.create(req,res));
router.route('/contact').get((req, res) => contactRouter.getAll(req,res));
router.route('/contact/:id').get((req, res) => contactRouter.get(req,res));
router.route('/contact/:id').delete((req, res) => contactRouter.delete(req,res));
// router.route('/contact/:id').put((req, res) => contactRouter.update(req,res));

module.exports = router;