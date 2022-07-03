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
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
function getUserInput(msg){
    return prompt(msg)
}

function getMonthName(monNum){
    let monthName= null
    switch(monNum){
        case "1": monthName = "jan"; break;
        case "2": monthName = "feb"; break;
        default:  monthName = "invalid month number"
    }
    return monthName
}

function getMonthName2(monNum){
    // loop if
}

const userMonth = getUserInput("please enter a month number??")
console.log(`Your Month Name is ${getMonthName(userMonth)}`)






















