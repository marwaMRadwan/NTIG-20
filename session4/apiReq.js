// http http2 https  node-fetch ....

const https = require("https")
const url = "https://jsonplaceholder.typicode.com/users"

const req = https.request(url , (res)=>{
    let myResult = ""
    res.on("data", x=>myResult+=x.toString())
    res.on("end", ()=> console.log(JSON.parse(myResult)))
})
req.on("error", (err)=>{
    console.log(err)
})
req.end()