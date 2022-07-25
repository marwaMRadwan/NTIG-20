const router = require("express").Router()
const postController = require("../app/controller/post.controller")
const auth = require("../middleware/auth")
router.post("/add",auth, postController.add)
router.get("/myPosts", auth, postController.myposts)
router.get("/myPosts/:id", auth, postController.singlePost)
router.delete("/myPosts/:id", auth, postController.delMyPost)
module.exports=router