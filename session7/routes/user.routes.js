const router = require("express").Router()
const user = require("../app/controller/user.controller")

router.get("/", user.home)

router.get("/add", user.addPost)
router.post("/addLogic", user.addLogicPost)

router.get("/single/:id", user.single)

router.get("/delete/:id", user.del)

router.get("/edit/:id", user.edit)

module.exports=router