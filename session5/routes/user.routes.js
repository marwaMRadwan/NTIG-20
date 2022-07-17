const router = require("express").Router()
const user = require("../app/controller/user.controller")

router.get("/", user.add)

module.exports=router