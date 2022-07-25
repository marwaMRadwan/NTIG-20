const router = require("express").Router()
const postController = require("../app/controller/post.controller")
const auth = require("../middleware/auth")
router.post("/add",auth, postController.add)
router.get("/myPosts", auth, postController.myposts)
module.exports=router