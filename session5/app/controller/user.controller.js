class User{
    static home = (req, res)=>{
        res.render("home", {
            pageTitle:"All Users"
        })
    }
    static add = (req, res)=>{
        res.render("add", {
            pageTitle:"Add User"
        })
    }
    static edit = (req, res)=>{
        res.render("Edit", {
            pageTitle:"edit User"
        })
    }
    static single = (req, res)=>{
        res.render("single", {
            pageTitle:"single User"
        })
    }
    static del = (req, res)=>{
        res.send("delete")
    }
}

// const userObj = new User()
// module.exports = userObj
module.exports = User