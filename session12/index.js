require("dotenv").config()
require("./app/db/connection")
const formData = require("express-form-data");
const express= require("express")
const cors = require("cors")
// const bodyparser = require("body-parser")
const userRoutes = require("./app/routes/user.routes")
const taskRoutes = require("./app/routes/task.routes")
const myHelper = require("./app/helpers/methods")
const app = express()
// app.use(formData.parse());

app.use(cors())
app.use(express.static(__dirname+"/uploads"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyparser.urlencoded({extended:true}))
app.use("/api/user", userRoutes)
app.use("/api/task", taskRoutes)
app.all("*", (req,res) => {
    myHelper.resGenerator(res, 404, "Invalid url", "not found")
})
app.listen(process.env.PORT, ()=> console.log(`http://localhost:${process.env.PORT}`))