const express = require('express');
const FollowController = require('../controllers/FollowController');

const router= express.Router();


//router.get("/",FollowController.getAllComments);
//router.post("/togglelike",FollowController.ToggleLike);
router.get("/getMyFollowings/:UserID",FollowController.getMyFollowings);
router.get("/getMyFollowers/:UserID",FollowController.getMyFollowers);

router.post("/ToggleFollowing",FollowController.ToggleFollowing);

 
// router.get("/getMyBookings/:UserID",FollowController.getMyBookings);


module.exports = router;