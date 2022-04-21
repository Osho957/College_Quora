const mongoose = require("mongoose"),
ObjectId = mongoose.Types.ObjectId;


const userSchema = new mongoose.Schema({
    
    UserName:{ type:String,  required:true },
    Mobile:{ type:String,  required:true },
    Email:{ type:String, required:true },
    PWD:{ type:String, required:true },
    UserType:{ type:String, default:"User" },
    Course:{ type:String,  default:"" },
    Year:{ type:Number, default:1 },
    InLineDescription:{ type:String,  default:"" },
    Description:{ type:String , default:"" },
    
    PWD:{ type:String, required:true },
    
    UserType:{ type:String, required:true,default:"User" }
})

module.exports = mongoose.model("User",userSchema,"Users");



