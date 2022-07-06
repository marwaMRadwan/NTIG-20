// console.log(__dirname)
// console.log(__filename)
// const x = process.argv[2]*1.0//parseInt(process.argv[2])//Number(process.argv[2])//+process.argv[2]
// console.log(+process.argv[2] + +process.argv[3])
//yargs
const yargs = require("yargs")
yargs.command({
    command:"hi",
    describe:"",
    handler: ()=>{
        console.log("you are using yargs ")
    }
})
yargs.command({
    command:"hello",
    handler: ()=>{
        console.log("hello command")
    }
})
yargs.command({
    command:"add",
    describe:"add two numbers",
    builder: {
        x:{
            type:"number",
            demandOption:true,
            describe:"x value"
        },
        y:{
            type:"number",
            default: 10
        }
    },
    handler:(argv)=>{
        console.log(argv.x+argv.y)
    }
})
yargs.argv