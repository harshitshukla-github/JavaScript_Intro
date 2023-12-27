function one (){
    const username = "Harshit"

    function two (){
        const website = "https://harshitshukla.io"
        console.log(username)
    }

    two()
}

one()

// Hoisting
console.log("--------------------------------------")

console.log(addOne(5))

hoist = addOne(10)
console.log(hoist)

function addOne(num){
    return num + 1
}


const addTwo = function addTwo(num){
    return num + 2
}

