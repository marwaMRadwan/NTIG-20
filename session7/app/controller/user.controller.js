const connection = require('../../db/connect')
class User{
    static home = (req, res)=>{
        const allUsers = []
        res.render("home", {
            pageTitle:"All Users",
            allUsers,
            isEmpty: !allUsers.length
        })
    }
    static addPost = (req, res)=>{
        res.render("addPost", { pageTitle:"Add User" })
    }
    static addLogicPost = (req,res)=>{
        connection( db => {
            db.collection("user").insertOne(req.body)
            .then(()=> res.redirect("/") )
            .catch(e=> res.redirect("/dberror"))
        })
    }

    static edit = (req, res)=>{
        res.render("Edit", {
            pageTitle:"edit User"
        })
    }
    static single = (req, res)=>{
        const result = {}
        res.render("single", {
            pageTitle:"single User",
            result
        })
    }
    static del = (req, res)=>{
    }
}

// const userObj = new User()
// module.exports = userObj
module.exports = User