const mongoose=require('mongoose');
const Followings = require('../models/Follow');
const ObjectId =  mongoose.Types.ObjectId;






module.exports.getMyFollowers=async (req,res)=>{
 console.log('getMyFollowers');
  var UserID = req.params.UserID;
  var Result = await Followings.find({UserID:UserID});
  
  console.log(Result);
  res.send(Result);

 };
 module.exports.getMyFollowings=async (req,res)=>{
  console.log('getMyFollowings');
   var UserID = req.params.UserID;
   var Result = await Followings.find({'Follower._id':UserID});
  
  console.log(Result);
  res.send(Result);
 
  };


module.exports.ToggleFollowing  = async (req,res)=> {
  var UserID = req.body.UserID;
  var FollowerID = req.body.FollowerID;
  var Follower = req.body.Follower;
  var User = req.body.User;
  
  var Record = new Followings();
  Record.FollowerID=FollowerID;
  Record.UserID=UserID;
  Record.Follower=Follower;
  Record.User=User;
  
  var Result = await Followings.findOne({FollowerID:FollowerID,UserID:UserID});
  console.log(Result);//return;

  if(Result==null){ console.log('called'); await Followings.create(Record);
  res.send("Started Following");
}
  else {await Followings.deleteOne(Result);  res.send("UnFollowed");}
}
