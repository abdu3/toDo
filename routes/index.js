const router = require('express').Router(),

// user routes 
UserRoutes=require("./user");
router.use("/users",UserRoutes);

// post routes
function authenticatUser(req,res,next){
    console.log("user is authentiacte");
    console.log(req);
    next();
}
PostRoutes=require("./post");
router.use("/posts",authenticatUser,PostRoutes);

module.exports = router