// let const var
// js versions (without oop) , es6

// const x = 5
// var y = 6
// var y = "marwa"
// var y = 3
// let z = 5

// var x = 5

// if(true){
//     var x = 10
//     console.log(x)
// }
// console.log(x)

// function test(){
//     var x = 15
//     console.log(`x inside function ${x}`)
// }
// test()
// console.log(x)


// for(;;){
//     console.log("hello")
// }

// name = prompt("enter your name")

/*
get user month number
check between 1, 12
compare number with months
1 function
*/
// const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
// function getUserInput(msg){
//     return prompt(msg)
// }

// function getMonthName(monNum){
//     let monthName= null
//     switch(monNum){
//         case "1": monthName = "jan"; break;
//         case "2": monthName = "feb"; break;
//         default:  monthName = "invalid month number"
//     }
//     return monthName
// }

// function getMonthName2(monNum){
//     let monthName=null
//     // if(monNum<1 || monNum>12) monthName = "invalid"
//     // else monthName = months[monNum-1]
//     // return monthName
//     for(let i =0; i<months.length; i++){
//         if(i+1 == monNum) return months[i]
//     }
//     return "invalid nonth number"
// }

// const userMonth = getUserInput("please enter a month number??")
// console.log(`Your Month Name is ${getMonthName2(userMonth)}`)

// c, f, k 
// 40 , f => 40f => 5c,3k, 40f

// function ctok(temp){ return temp*30 }

// const temp = getUserInput("please enter temp")
// const tempType = getUserInput("enter temp type")

// test()
// test1()
// function test(){ 
//     console.log('test')
// }
// let test1 = function(){ 
//     console.log("test1")
// }
// let test2 = () => {
//     console.log(this)
// }
// let test3 = () => 5

// const cTok = (temp) => temp*10
// const cTof = (temp) => temp*20
// const fToc = (temp) => temp*30
// const fToK = (temp) => temp*40
// const kToc = (temp) => temp*50
// const kTof = (temp) => temp*60

// const getUserTempOutPut = (temp, tempType)=>{
//     let result = null
//     if(tempType.toLowerCase()=="c") 
//         result = `temp in f = ${cTof(temp)} - c= ${temp} - k = ${cTok(temp)}`
//     else if(tempType.toLowerCase()=="f") 
//         result = `temp in f = ${temp} - c= ${fToc(temp)} - k = ${fToK(temp)}`
//     else if(tempType.toLowerCase()=="k") 
//         result = `temp in f = ${kTof(temp)} - c= ${kToc(temp)} - k = ${temp}`
//     else result="invalid temp type"
//     return result
// }

// let temp = getUserInput("enter Temp")
// let tempType = getUserInput("temp type")
// console.log(getUserTempOutPut(temp, tempType))







let data = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
    ]


// forEach filter find findIndex map .....

// data.forEach((image, index)=>{
//     console.log(`${index}
// albumId : ${image.albumId}
// id: ${image['id']}
// title: ${image.title}
// url:${image.url}
// thumbnailUrl: ${image.thumbnailUrl}
// ----------------------------------------------
// `)
// })
const filtered = data.filter((image, index)=>{
    return image.id!=7 && image.id!=5
})
console.log(filtered)
const filtered1 = data.find((image, index)=>{
    return image.id!=7 && image.id!=5
})
console.log(filtered1)

const filtered2 = data.findIndex((image, index)=>{
    return image.id!=7 && image.id!=5
})
console.log(filtered2)




