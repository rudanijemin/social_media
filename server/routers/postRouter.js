const router = require('express').Router();
const postController = require('../controllers/postController');
const requiredUser= require('../middlewares/requireUser')

router.get('/all',requiredUser,postController.getAllPostController);

module.exports = router;