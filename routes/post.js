const router = require('express').Router(),

postController=require("../controllers/post")

router.get("/", postController.index); // show all posts
router.get('/:pid',postController.show);  // show post by id
router.put("/:pid/update",postController.update); // update post
router.delete("/:pid/delete",postController.delete); // delete post by id
router.post("/create",postController.create); // add new post

module.exports = router