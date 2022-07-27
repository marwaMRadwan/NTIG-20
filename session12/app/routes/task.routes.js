const router = require("express").Router()
const task = require("../controllers/task.controller")
const {auth, authAdmin} = require("../middleware/auth.middleware")
router.post("/add", auth, task.add)
module.exports=router