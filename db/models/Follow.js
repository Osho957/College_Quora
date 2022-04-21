const mongoose=require('mongoose');
const { Schema } = mongoose;
ObjectId = mongoose.Types.ObjectId;
const FollowSchema=new mongoose.Schema({
    
    UserID:{ type:ObjectId, required:true},
    User:{  type:Object },
    FollowerID:{type:ObjectId, required:true},
    FollowDateTime:{  type:Date,default:new Date() },
    Follower:{  type:Object }
   
});

module.exports =new mongoose.model("Follow",FollowSchema,"Follows");