const router = require("express").Router()
const user = require("../app/controller/user.controller")

router.get("/", user.home)
router.get("/add", user.add)
router.get("/edit", user.edit)
router.get("/single", user.single)
router.get("/delete", user.del)

module.exports=router