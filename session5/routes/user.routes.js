const router = require("express").Router()
const user = require("../app/controller/user.controller")

router.get("/", user.home)

router.get("/add", user.add)
router.get("/addLogic", user.addLogic)

router.get("/addPost", user.addPost)
router.post("/addPost", user.addLogicPost)

router.get("/single/:id", user.single)

router.get("/delete/:id", user.del)

router.get("/edit/:id", user.edit)

module.exports=router