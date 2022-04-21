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
const Users =require('./models/user');
const Posts =require('./models/Post');







async function name() {


     var Results = await Posts.aggregate([
        { $lookup:
           {
             from: 'Users',
             localField: 'UserID',
             foreignField: '_id',
             as: 'User'
           }
         }//,{ $match: {"_id":"623805a9c0f523c8eb50a637"}}
        ]);
        Results.forEach(Result => {
             Result.User = Result.User[0];
        });



     console.log(Results);
}
name();


// app.use("/cinemas",cinemaRouter);
// app.use("/orders",OrderRouter);
// app.use("/products",ProductRoute);
// app.use("/posts",PostRouter);
// app.use("/users",userRouter);




//console.log('Server is Online');
//app.listen(5000);