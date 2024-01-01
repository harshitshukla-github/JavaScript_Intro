// if - else if - else

const balance = 1000;

if (balance > 500) console.log("The if condition is correct!")

// Logical Operators 
/* && - AND OPERATOR
   // - OR OPERATOR
   !  - NOT OPERATOR  
*/

console.log("------------------------------------------")
// Switch Statements:
/*If a break is not provided then all the conditions will cascade including default as well. */
fruit = "strawberry"

switch (fruit){
  case "apple":
    console.log("This is an Apple🍏!");
    break;
  case "banana":
    console.log("This is a Banana🍌!");
     break;
  case "grape":
    console.log("This is a Grape🍇!");
     break;
  case "mango":
    console.log("This is a Mango🥭!");
     break;
  case "strawberry":
    console.log("This is a Strawberry🍓!");
    break;
  default:
    console.log("We don't have this fruit at Walmart.");
    break;
}

console.log("------------------------------------------")
// Falsy Value
// false, 0, -0, BigInt 0n, "", null. undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

let array_input = []

if (array_input.length === 0){
  console.log("Array is empty!");
}

const object_input = {}

if (Object.keys(object_input).length === 0){
  console.log("Object is empty");
}