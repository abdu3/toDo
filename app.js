const express = require("express");
const mongoose=require('mongoose'),

app=express();
const router =require("./routes/index")

mongoose.Promise= global.Promise;

mongoose.connect('mongodb://localhost:27017/blogs',{
    useNewUrlParser:true
}).then(()=>console.log("connected to Mongodb"))
.catch(error=>console.log(error));

app.use(express.json()) // for initail app to receve json data




app.get("/",(req,res)=>{
    res.send('welcome to aaaa rest Api!');
});
app.use("/",router);

app.listen(3000,()=>{
    console.log("connected");
    
});
