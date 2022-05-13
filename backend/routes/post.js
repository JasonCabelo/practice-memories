const express = require("express");
const {getPost,createPost,updatePost, deletePost,likePost } = require('../controllers/post');
const router = express.Router();
router.route('/').get(getPost);
router.route('/').post(createPost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deletePost);
router.route('/:id/likePost').put(likePost);
 module.exports= router;
