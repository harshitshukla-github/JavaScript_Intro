//In JavaScript, the this keyword refers to an object, 
// and which object it refers to depends on how this is being invoked (used or called)

/* 1. Here are some scenarios:

In an object method: this refers to the object. For example:

const person = {
  firstName: "John",
  lastName : "Doe",
  id : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
In the fullName method, this refers to the person object1.

Alone: this refers to the global object1.

In a function: this refers to the global object. 
But in strict mode, this is undefined1.

In an event: this refers to the element that received the event1.

Explicit Function Binding: Methods like call(), apply(), and
bind() can refer this to any object1.

Note that this is not a variable. 
It is a keyword, and you cannot change its value1.*/

const user = {
    username: "Alexei Navalny",
    wallet: "$3000",

    userWelcome: function () {
        console.log(`${this.username}, Welcome to Wallet DAPP`);
        console.log(this)
    }
}

// console.log(user);
user.userWelcome()

user.wallet = "$4500"

user.userWelcome()

console.log("------------------------------------------------")

function aFunction(){
    let username = "Greg Thompson"
    console.log(this.username);
    console.log(this);
}

aFunction();

console.log("------------------------------------------------")
// Arrow Functions

const arrow1 =  () => {
  let name = "hitesh"
  console.log(this);
}

arrow1()

console.log()

// 
const arrow2 = (num1, num2) =>  num1 + num2 

console.log(arrow2(10, 30))

const arrow3 = num1 => num1 ** 2

console.log(arrow3(4))