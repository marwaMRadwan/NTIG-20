const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "../resources/public")))
app.set("view engine", "hbs")
app.set("views" , path.join(__dirname, "../resources/views"))
hbs.registerPartials(path.join(__dirname, "../resources/layouts"))

const userRoutes = require("../routes/user.routes")
app.use(userRoutes)

module.exports = app