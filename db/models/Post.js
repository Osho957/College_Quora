const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;

const PostSchema = new mongoose.Schema({
    
    PostTitle:{type:String,default:''},
    Description:{type:String,default:'' },
    UserID:{type:ObjectId},
    Likes:{type:[]},
    Comments:{type:[]},
    PostDateTime:{type:Date,default:new Date()},
    Category:{type:String,default:'In General' }
});

module.exports = mongoose.model("Post",PostSchema,"Posts");