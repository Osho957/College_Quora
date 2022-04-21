const express = require('express');
const userController = require('../controllers/UserController');

const router= express.Router();


console.log('route');
router.get("/",userController.getAllUsers);//

router.get("/getUserByID/:UserID",userController.getUserByID);
router.get("/testcreate",userController.testcreate);
router.post("/create",userController.create);
router.get("/search",userController.search);

router.post("/login",userController.login);
router.delete("/:ID",userController.delete);
router.post("/update",userController.update);



module.exports = router;
