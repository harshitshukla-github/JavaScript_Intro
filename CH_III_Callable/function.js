// Function with Default values
function hola(name = "anónima"){
    return `Hola! ${name}`
}

console.log(hola())
console.log(hola("Mandes"))

// Function with multiple arguments
console.log("--------------------------------------")
function numbers_sum(num1, ...nums){
    let sum = num1 
    for (a of nums){
        sum += a
    }
    return sum
}

let res1 = numbers_sum(10)
let res2 = numbers_sum(10, 20)
let res3 = numbers_sum(10, 20, 30)

console.log(res1, res2, res3)

// Handling Objects in Functions
console.log("--------------------------------------")
const user = { username: "Jacob", prices: 199}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $${anyobject.price}`);
    return null;
}

// handleObject(user)
handleObject(user)
handleObject({ username: "Sam", price: 399})

// Handling Array in Functions
console.log("--------------------------------------")
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));