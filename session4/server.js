const yargs = require("yargs")
const author = require("./controller/author")
yargs.command({
    command:"add",
    describe:"add new author",
    builder:{
        name:{type:"string", demandOption:true},
        field:{type:"string", demandOption:false},
    },
    handler:(argv)=>{
        author.add(argv.name, argv.field)
    }
})
yargs.command({
    command:"showAll",
    describe:"add new author",
    builder:{},
    handler:(argv)=>{
        
    }
})
yargs.command({
    command:"edit",
    describe:"add new author",
    builder:{},
    handler:(argv)=>{
        
    }
})
yargs.command({
    command:"single",
    describe:"add new author",
    builder:{},
    handler:(argv)=>{
        
    }
})
yargs.command({
    command:"delete",
    describe:"add new author",
    builder:{},
    handler:(argv)=>{
        
    }
})
yargs.argv