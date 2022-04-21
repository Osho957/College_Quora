const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();


 router.get("/",PostController.getAllPosts);
 router.get("/getAllFullPosts",PostController.getAllFullPosts);
// router.get("/GetUserPosts/:UserID",PostController.GetUserPosts);
router.get("/getFullPostByID/:PostID",PostController.getFullPostByID);
router.get("/getFullPostsByCategory/:Category",PostController.getFullPostsByCategory);

router.post("/create",PostController.create);

// router.get("/getMoviesByCinemaID/:cinemaID",PostController.getMoviesByCinemaID);
// router.delete("/:id",PostController.delete);
// router.get("/:id",PostController.getSlotByID);
// router.get("/getSlotsByMovieID/:id",PostController.getSlotsByMovieID);
//
module.exports = router;