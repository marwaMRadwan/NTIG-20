// http http2 https  node-fetch ....

const https = require("https")
const yargs = require("yargs")
const url = "https://jsonplaceholder.typicode.com/users"

// const req = https.request(url , (res)=>{
//     let myResult = ""
//     res.on("data", x=>myResult+=x.toString())
//     res.on("end", ()=> console.log(JSON.parse(myResult)))
// })
// req.on("error", (err)=>{
//     console.log(err)
// })
// req.end()

const apiRequest = (url, cb) =>{
    const req = https.request(url , (res)=>{
        let myResult = ""
        res.on("data", x=>myResult+=x.toString())
        res.on("end", ()=> cb(false , JSON.parse(myResult)))
    })
    req.on("error", (err)=> cb(err, false))
    req.end()
}

yargs.command({
    command:"req",
    builder:{
        url: {type:"string", demandOption:true}
    },
    handler:(argv)=>{
        console.log("test")
        apiRequest(argv.url, (err, result)=>{
            if(err) return console.log(err)
            console.log(result)
        })
    }
})
yargs.argv