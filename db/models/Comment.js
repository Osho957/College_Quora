const mongoose = require("mongoose");
const { Schema } = mongoose;
ObjectId = mongoose.Types.ObjectId;

const CommentSchema=new mongoose.Schema({
    
    CommentText:{ type:String, required:true },
    UserID:{ type:ObjectId, required:true},
    PostID:{type:ObjectId, required:true},
    CommentDateTime:{  type:Date,default:new Date() },
    User:{type:{
        _id:{type:ObjectId,required:true},
        UserName:{ type:String,  required:true },
        InLineDescription:{ type:String,  default:"" },
    }, required:true}

})

module.exports = new mongoose.model("Comment",CommentSchema,"Comments");
