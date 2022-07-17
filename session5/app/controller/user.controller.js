const Deal = require('./dealWithJson')
const fileName= "db/users.json"
class User{
    static home = (req, res)=>{
        const allUsers = Deal.readDataFromJson(fileName)
        res.render("home", {
            pageTitle:"All Users",
            allUsers,
            isEmpty: !allUsers.length
        })
    }
    static add = (req, res)=>{
        // if(req.query.name){
        //     const user = {  id:Date.now(), ...req.query}
        //     const data = Deal.readDataFromJson(fileName)
        //     data.push(user)
        //     Deal.writeDataToJson(fileName, data)
        //     res.redirect("/")    
        // }
        // else
        res.render("add", { pageTitle:"Add User" })
    }
    static addLogic = (req,res)=>{
        // const user = req.query //{name, email}
        // user.id=Date.now()
        const user = {  id:Date.now(), ...req.query}
        const data = Deal.readDataFromJson(fileName)
        data.push(user)
        Deal.writeDataToJson(fileName, data)
        res.redirect("/")
    }
    static addPost = (req, res)=>{
        res.render("addPost", { pageTitle:"Add User" })
    }
    static addLogicPost = (req,res)=>{
        const user = {  id:Date.now(), ...req.body}
        const data = Deal.readDataFromJson(fileName)
        data.push(user)
        Deal.writeDataToJson(fileName, data)
        res.redirect("/")
    }

    static edit = (req, res)=>{
        res.render("Edit", {
            pageTitle:"edit User"
        })
    }
    static single = (req, res)=>{
        const id = req.params.id
        const data = Deal.readDataFromJson(fileName)
        const result = data.find( user => id == user.id )
        res.render("single", {
            pageTitle:"single User",
            result
        })
    }
    static del = (req, res)=>{
        const id = req.params.id
        const data = Deal.readDataFromJson(fileName)
        const result = data.filter( user => id != user.id )
        Deal.writeDataToJson(fileName, result)
        res.redirect("/")
    }
}

// const userObj = new User()
// module.exports = userObj
module.exports = User