const express = require('express');
const CommentController = require('../controllers/CommentController');

const router= express.Router();


router.get("/",CommentController.getAllComments);
router.get("/:CommentID",CommentController.getCommentsByCommentID);
router.get("/getCommentsByUserID/:UserID",CommentController.getCommentsByUserID);
router.get("/getCommentsByPostID/:PostID",CommentController.getCommentsByPostID);

router.post("/create",CommentController.create);
router.post("/delete/:CommentID",CommentController.DeleteCommentByCommentID);
router.post("/DeleteCommentsByPostID/:PostID",CommentController.DeleteCommentsByPostID);
 
// router.get("/getMyBookings/:UserID",CommentController.getMyBookings);


module.exports = router;