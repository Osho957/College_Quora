const mongoose = require('mongoose');
const Comments = require('../models/Comment');


module.exports.getAllComments = async(req,res)=> {
res.send(await Comments.find({}).sort({CommentDateTime: '-1'}));
};


module.exports.getCommentsByUserID = async(req,res)=> {
    let UserID = req.params.UserID;
    //  console.log(UserID);
    var Result = await Comments.find({"UserID":UserID});
    res.send(Result);

};

module.exports.getCommentsByPostID=async(req,res)=> {
    let PostID = req.params.PostID;
    var Result = await Comments.find({"PostID":PostID});
    res.send(Result);
}

module.exports.getCommentsByCommentID=async(req,res)=> {
    let CommentID = req.params.CommentID;
    var Result = await Comments.find({"_id":CommentID});
    res.send(Result);
}
module.exports.DeleteCommentByCommentID=async(req,res)=> {
    let CommentID = req.params.CommentID;
    Comments.findOneAndDelete({_id: CommentID }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{

            console.log("Deleted User : ", docs);
            res.send('Success');
        }
    });
    res.send('Success');
}

module.exports.DeleteCommentsByPostID=async(req,res)=> {
    let PostID = req.params.PostID;
    Comments.findOneAndDelete({PostID: PostID }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
            res.send('Success');
        }
    });
    res.send('Success');
}


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

