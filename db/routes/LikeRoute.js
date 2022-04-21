const express = require('express');
const LikeController = require('../controllers/LikeController');

const router= express.Router();


//router.get("/",LikeController.getAllComments);
router.post("/togglelike",LikeController.ToggleLike);
// router.get("/getCommentsByUserID/:UserID",LikeController.getCommentsByUserID);
// router.get("/getCommentsByPostID/:PostID",LikeController.getCommentsByPostID);

// router.post("/create",LikeController.create);

 
// router.get("/getMyBookings/:UserID",LikeController.getMyBookings);


module.exports = router;