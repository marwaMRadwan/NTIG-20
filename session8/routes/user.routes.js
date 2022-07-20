const router = require("express").Router()
const user = require("../app/controller/user.controller")

router.get("/", user.home)

router.get("/addNew", user.newAdd)
router.post("/addNew", user.newAddLogic)

router.get("/add", user.addPost)
router.post("/addLogic", user.addLogicPost)

router.get("/single/:id", user.single)

router.get("/delete/:id", user.del)

router.get("/edit/:id", user.edit)
router.post("/edit/:id", user.editLogic)

router.get("/addAddr/:id", user.addAddr)
router.post("/addAddr/:id", user.addAddrLogic)

router.get("/delAddr/:addrId", user.delAddr)
module.exports=router