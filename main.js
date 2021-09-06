alert("Hello, I'm the first and only Talking Vending Machine.")

let item = prompt("What would you like today?")
let qty = prompt("How many would you like?")

//generate random num for "tons"
const genRandNum = (min, max) => {
    return Math.floor(Math.random() * max + min)
}

//dispense item by x num of times
const dispense = (num) => {
    for(let counter = 1; counter <= num; counter++){
        console.log(item)
    }
}

let rand = genRandNum(1, 19)

if(qty.includes("tons")) {
    dispense(rand)
} else{
    dispense(parseInt(qty))
}

console.log("There you go! Come again!")
