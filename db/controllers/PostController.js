const mongoose = require('mongoose');
const Post = require('../models/Post');
ObjectId = mongoose.Types.ObjectId;
const Posts = require('../models/Post');
const Likes = require('../models/Like');
const Comments = require('../models/Comment');


module.exports.getAllPosts = async (req, res) => {
  console.log('Posts getAllPosts Called');
  //var Result = await Posts.find({});

  var Result = await Posts.aggregate([
    {
      $lookup:
      {
        from: 'Users',
        localField: 'UserID',
        foreignField: '_id',
        as: 'PostUser'
      }
    }
  ]);
  console.log(Result);
  res.send(Result);
};
module.exports.getAllFullPosts = async (req, res) => {
  var Result = await Posts.aggregate([
    {
      $lookup:
      {
        from: 'Users',
        localField: 'UserID',
        foreignField: '_id',
        as: 'PostUser'
      }
    },
    {
      $lookup:
      {
        from: 'Comments',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Comments'
      }
    },
    {
      $lookup:
      {
        from: 'Likes',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Likes'
      }
    }

  ]);
  Result.forEach(Post => {
    if (Post.PostUser != null) Post.PostUser = Post.PostUser[0];
    Post.PostImage = "http://localhost:5000/Images/PostImages/" + Post._id + ".jpg";


  });

  res.send(Result); console.log(Result._id); return;
};

module.exports.getFullPostsByCategory = async (req, res) => {
  console.log('getFullPostsByCategory');
  var Category = req.params.Category;
  
 // console.log(Category);return;
  var Result = await Posts.aggregate([
    {
      $lookup:
      {
        from: 'Users',
        localField: 'UserID',
        foreignField: '_id',
        as: 'PostUser'
      }
    },
    {
      $lookup:
      {
        from: 'Comments',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Comments'
      }
    },
    {
      $lookup:
      {
        from: 'Likes',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Likes'
      }
    }

  ]);
  var FilteredResult=[];
  Result.forEach(Post => {

    if (Post.PostUser != null) Post.PostUser = Post.PostUser[0];
    Post.PostImage = "http://localhost:5000/Images/PostImages/" + Post._id + ".jpg";

    if(Post.Category == Category)FilteredResult.push(Post);
  });

  res.send(FilteredResult); console.log(FilteredResult); return;
};







module.exports.getPostByID = async (req, res) => {

  let id = req.params.id;
  console.log('Posts FindByID Called');
  let Result = await Posts.findById(id);
  res.send(Result);

};
module.exports.getFullPostByID = async (req, res) => {

  let PostID = req.params.PostID;

  var Result = await Posts.aggregate([

    {
      $lookup:
      {
        from: 'Users',
        localField: 'UserID',
        foreignField: '_id',
        as: 'PostUser'
      }
    },
    {
      $lookup:
      {
        from: 'Comments',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Comments'
      }
    },
    {
      $lookup:
      {
        from: 'Likes',
        localField: '_id',
        foreignField: 'PostID',
        as: 'Likes'
      }
    }

  ]);
  Result.forEach(Post => {
    if (Post._id != PostID) {

      Result.splice(Result.indexOf(Post), 1);

    }

  });

  Result = Result[0];
  if (Result.PostUser != null) Result.PostUser = Result.PostUser[0];
  Result.PostImage = "http://localhost:5000/Images/PostImages/" + Result._id + ".jpg";


  res.send(Result); console.log(Result._id); return;

};
// { 
//   $lookup:
//    {
//      from: 'Users',
//      localField: 'UserID',
//      foreignField: '_id',
//      as: 'PostUser'
//    }
//  },
//  { $lookup:
//   {
//     from: 'Comments',
//     localField: '_id',
//     foreignField: 'PostID',
//     as: 'Comments'
//   }
// }


module.exports.GetUserPosts = async (req, res) => {

  let UserID = req.params.id;
  console.log('Post GetUserPosts Called');
  let Slots = await Slot.find({ "movieID": MovieID });
  let CinemaIDs = [];
  Slots.forEach(element => {
    if (!CinemaIDs.includes(element.cinemaID)) CinemaIDs.push(element.cinemaID);

  });
  let CinemaList = await Cinema.find({ _id: { $in: CinemaIDs } });
  CinemaList.forEach(element => {

    Slots.forEach(slot => {
      if (slot.cinemaID == element._id)
        slot.cinema = (element);

    });


  });
  res.send(Slots);

};






module.exports.getMoviesByCinemaID = async (req, res) => {

  res.send('Success');
}






module.exports.create = async (req, res) => {

  let record = req.body;
  //console.log(record);return;
  let Result = await Posts.create(record);
  res.statusCode = 200;
  res.send(Result);

}
module.exports.delete = async (req, res) => {

  let id = req.params.id;
  console.log('Slot Delete Called');
  let Result = await Slot.deleteOne({ _id: id });
  res.send(Result);

}