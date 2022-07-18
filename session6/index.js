//npm init --y
//npm i mongodb

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient

const { MongoClient } = require("mongodb")
const dbURL = "mongodb://127.0.0.1:27017"
MongoClient.connect(dbURL, {}, (err, client)=>{
    if(err) return console.log("db error")
    const db = client.db("s6g20")
    db.collection("users")
    .insertOne(
        {name:"marwa", age:37}, 
        (error, result)=>{
            if(error) return console.log("fe error fe el insert")
            console.log(result)
            client.close()
        }
    )
})