const mongoose = require('mongoose');
const Users =require('../models/user');


module.exports.getAllUsers= async (req,res)=> {
    
  let users = await Users.find();
  res.send(users);

};
module.exports.getUserByID =async (req,res)=> {
    
  var id = req.params.UserID;
 console.log(id);
 
  var Result= await Users.findById(id);
  console.log(Result);
  res.send(Result);
}

module.exports.testcreate= async (req,res)=> {
var user = new Users();
  Users.create(user);
  res.send(user);
};


module.exports.create= async (req,res)=> {

  var User =req.body;
  var Result = await Users.findOne({Mobile:User.Mobile});
  if(Result!=null){
    res.statusCode=409;
    res.send("Mobile Number Already Exist");
    return;
  }
  Result = await Users.findOne({Email:User.Email});
  if(Result!=null){
    res.statusCode=409;
    res.send("Email Already Exist");
    return;
  }
 User  = await Users.create(User);
    console.log(User);
    res.send(User);
    return;
  
  };

module.exports.login=async (req,res)=>{
 
    let SearchObject = req.body;
    console.log(SearchObject);
    let user = await Users.findOne(SearchObject);
  
      if(user) 
      {
        res.statusCode = 200;
        res.send(user);
      }
        else {
          res.statusCode = 401;
          res.send({Status:"Error",Message:"Invalid Credentials"});}
}
module.exports.delete =async (req,res)=> {
console.log('Delete');
  let id = req.params.ID;
  var Result= await Users.deleteOne({ _id: id });
  res.send(Result);
}
module.exports.update =async (req,res)=> {
    
    var user = req.body;
    var id = user._id;
    delete user._id;
    //console.log(user);return;
    var Result= await Users.updateOne({ _id: id },user);
    res.send(Result);
  }
  module.exports.search =async (req,res)=> {
    
    var user = req.body;
    var id = user._id;
    delete user._id;
    var Result= await Users.find(user);
    res.send(Result);
  }
