const mongoose=require('mongoose');
const { Schema } = mongoose;
ObjectId = mongoose.Types.ObjectId;
const LikeSchema=new mongoose.Schema({
    
    UserID:{ type:ObjectId, required:true},
    PostID:{type:ObjectId, required:true},
    LikeDateTime:{  type:Date,default:new Date() },
    User:{type:{
        _id:{type:ObjectId,required:true},
        UserName:{ type:String,  required:true },
        InLineDescription:{ type:String,  default:"" },
    }, required:true}
  
    
});

module.exports =new mongoose.model("Like",LikeSchema,"Likes");