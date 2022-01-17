const mongoose=require("mongoose"),

{Schema}=mongoose

const PostSchema=new Schema({

    title:{
        type:String,
        trim:true,
        required:true,
    },
    text:{
        type:String,
        trim:true,
        required:true,
    },
    UserId:{
        type:Schema.Types.ObjectId,ref:"User"
    }
},{Collection: "User", versionKey:false})
module.exports=mongoose.model("Post",PostSchema)