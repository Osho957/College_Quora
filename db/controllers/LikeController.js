const mongoose = require('mongoose');
const Likes = require('../models/Like');



module.exports.getLikesByPostID=async(req,res)=> {
    let PostID = req.params.PostID;
    var Result = await Likes.find({"PostID":PostID});
    res.send(Result);
}


module.exports.ToggleLike=async(req,res)=> {
    let Like = req.body;

var Result = await Likes.find({UserID:Like.UserID,PostID:Like.PostID});
 
//console.log(Result);return;

if(Result.length>0){
    
   var Result = await Likes.deleteOne({UserID:Like.UserID,PostID:Like.PostID});}
else{
    var Result = await Likes.create(Like);
  
    
}
res.send(Result);}

module.exports.create = async(req,res)=> {
    console.log('Comment Create Called');
    let record = req.body;
    console.log(record);
    let Result = await Comments.create(record);
    res.send(Result);
    
};




module.exports.deleteBooking  =async (req,res)=> {
    console.log('Calledsasdasd');
    let id = req.params.id;
    let Result= await Booking.deleteOne({ _id: id });
    res.send(Result);
}

