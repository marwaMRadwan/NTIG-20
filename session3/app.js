// console.log("1")
// let x 
// setTimeout(()=>{
//     x=5
// }, 2000)
// console.log(x)
//promises
// const x = 5
// console.log(myPro(x))
// console.log("end")

// const myPro = (val) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(typeof val == "number") resolve("el donia tmam")
//             else reject("msh tmam")

//         }, 2000)
//     })
// }

// //then catch
// myPro("h")
// .then(result=>{ 
//     console.log(result)
//     console.log("end");
// })
// .catch(err=>{
//     console.log(err)
//     console.log("e7na fe reject");
// })

// const data = fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
// console.log(data);
// const apiRes = (link, callback)=>{
//     fetch(link)
//     .then(data=>{
//         data.json()
//         .then(res=> callback(res, false))
//         .catch(e=> callback(false, e))
//     })
//     .catch(err=> callback(false, err))
    
// }
// apiRes("https://jsonplaceholder.typicode.com/photos?_limit=10", (res, err)=>{
//     if(res) return console.log(res)
//     console.log(err)
// })
//async await
const apiRes = async(link, callback)=>{
    try{
        const data = await fetch(link)
        const res = await data.json()    
        callback(res, false)
    }
    catch(e){
        callback(false, e)
    }
}
apiRes("https://jsonplaceholder.typicode.com/photos?_limit=10", (res, err)=>{
    if(res) {
        const body = document.querySelector("body")
        res.forEach(element => {
            let p = document.createElement("p")
            body.appendChild(p)
            p.textContent=element.albumId
        });
    }    
    console.log(err)
})











