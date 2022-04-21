const express = require('express');
const app = express();
const path = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const fileUpload = require('express-fileupload');
mongoose.connect("mongodb://localhost:27017/College_Quora");

let cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use(express.static('images'));
app.use('/images', express.static('images'));


app.use(fileUpload({ }));

// -------- Adding Routings / Controllers
const LikeRouter= require('./routes/LikeRoute');
const FollowRoute= require('./routes/FollowRoute');

const FileRoute= require('./routes/FileRoute');
const CommentRouter= require('./routes/CommentRoute');
const PostRouter= require('./routes/PostRoute');
const userRouter= require('./routes/users');









app.use("/follows",FollowRoute);
app.use("/files",FileRoute);
app.use("/likes",LikeRouter);
app.use("/comments",CommentRouter);
app.use("/posts",PostRouter);
app.use("/users",userRouter);




console.log('Server is Online');
app.listen(5000);