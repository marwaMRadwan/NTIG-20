const MongoClient = require("mongodb").MongoClient
const myConnection = (cb) =>{
    MongoClient.connect(process.env.DBURL, {}, (error, client)=>{
        if(error) return console.log("error in connection")
        const db = client.db(process.env.DBNAME)
        cb(db)
    })
}
module.exports = myConnection