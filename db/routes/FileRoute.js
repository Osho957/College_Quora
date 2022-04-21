const express = require('express');
const FileController = require('../controllers/FileController')

const router = express.Router();


router.post("/UploadProductImage",FileController.UploadProductImage);
router.post("/UploadPostImage",FileController.UploadPostImage);
router.post("/UploadProfileImage",FileController.UploadProfileImage);


module.exports = router;