const router = require('express').Router(),

UserController=require("../controllers/user")

router.get("/",UserController.index); // get all user 
router.get("/:uid",UserController.show); // get user by id
// router.post("/",UserController.add);  // add new user
router.put("/:uid/",UserController.update);  /// update user
router.delete("/:uid/",UserController.delete); /// delete user
router.post("/create",UserController.create); // add new user


// router.get("/", UserController.index)
// // router.get('/:uid',UserController.show)
// // router.put("/:uid/update",UserController.update)


module.exports =router;
