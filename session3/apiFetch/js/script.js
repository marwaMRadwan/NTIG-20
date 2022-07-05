const apiBaseURL = "https://jsonplaceholder.typicode.com/"
// fetch api method
const getApiData = async(apiUrl, cb)=>{
    try{
        const response = await (await fetch(apiUrl)).json()
        cb(response, false)
    }
    catch(e){
        cb(false, "error in fetching data")
    }
}


// crete element on screen
const createMyOwnElement = (parent, ele, txt=null, classes=null,  attribute=null) =>{
    const myEle = document.createElement(ele)
    parent.appendChild(myEle)
    if(classes) myEle.className= classes
    if(txt) myEle.textContent=txt
    if(attribute) myEle.setAttribute(attribute.name, attribute.val) // {name:"id", val:"1"}
    return myEle
}
const apisKeyWord = [
    {apiKeyword: "posts", heads: ["userId","id","title","body"]},
    {apiKeyword: "comments", heads: ["postId","id","name","email","body"]},
]
const btnWrap = document.querySelector("#btnWrap")
apisKeyWord.forEach(api=>{
    const btn = createMyOwnElement(btnWrap, "button", api.apiKeyword, "btn btn-primary mx-2")
    btn.addEventListener("click", ()=> {
        getApiData(`https://jsonplaceholder.typicode.com/${api.apiKeyword}`, (res, err)=>{
    if(res){
        console.log(res)
    }
    else console.log(err)
})

    })
})
//show data

// getApiData("https://jsonplaceholder.typicode.com/comments", (res, err)=>{
//     if(res){
//         res.forEach(element => {
//             const tr = createMyOwnElement(tableData, "tr")
//             createMyOwnElement(tr, 'td', element.postId)
//             createMyOwnElement(tr, 'td', element.id)
//             createMyOwnElement(tr, 'td', element.name)
//             createMyOwnElement(tr, 'td', element.email)
//             createMyOwnElement(tr, 'td', element.body)
//         });
//     }
//     else console.log(err)
// })

