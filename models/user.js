const mongoose=require("mongoose"),
{Schema}=mongoose

const UserSchema =new Schema({
    name:{
        type:String,
        trim:true, /// means take spacess in the parties شيل المسافات التي في الاطراف
        required:true
    },
    age:{
        type:Number,
        trim:true, 
        required:true
    },
    email:{
        type:String,
        trim:true, 
        required:true,
        unique:true
    }
}
// , {Collection: "User", versionKey:false}
)
  module.exports=mongoose.model("User",UserSchema);


// module.exports= User = [
//     {title: 'george' , id: 1},
//     {title: 'josh' , id: 2},
//     {title: 'tyler' , id: 3},
//     {title: 'alice' , id: 4},
//     {title: 'candice' , id: 5}

// ]
