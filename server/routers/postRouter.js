const router = require('express').Router();
const postController = require('../controllers/postController');
const requiredUser= require('../middlewares/requireUser')

// router.get('/all',requiredUser,postController.getAllPostController);
router.post("/", requiredUser, postController.createPostController);
router.post("/like", requiredUser, postController.likeAndUnlikePost);
router.put('/', requiredUser, postController.updatePostController);
router.delete('/', requiredUser, postController.deletePost);

module.exports = router;