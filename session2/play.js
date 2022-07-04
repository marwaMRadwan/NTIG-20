// function x(){
//     return function(){
//         console.log("hi from inner function")
//     }
// }
// x()()
//self invoke
// (function test(){
//     console.log("hello")
// })()
//clousers
// const c = () =>{
//     return{
//         a:1,
//         b:2,
//         c:3,
//         add(){console.log("add")}
//     }
// }
// const t = c()
// t.add()
// const myClouser = (a,b)=>{
//     return {
//         a,
//         b,
//         add(){ return a+b},
//         sub(){ return a-b},
//         mul(){ return a*b},
//         div(){ return a/b}
//     }
// }
// const c1 = myClouser(5,3)
// console.log(c1.a)

//callback
const checker = (val, cb) =>{
    if(typeof val=="number") cb("it is a number", false)
    else cb(false, "not a number")
}

checker("v", (result, err)=>{
    if(err) console.log(err)
    else console.log(result)
})
















