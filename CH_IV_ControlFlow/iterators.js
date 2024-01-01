// FOR LOOP

let myArray = ["apple", "banana", "cherry", "durian", "emblica"]

for (let index = 0; index  < myArray.length; index++){
  console.info(index, "-->", myArray[index])
}

console.log("------------------------------")

for (let index = 0; index  < myArray.length; index+=1){
  console.info(index, "-->", myArray[index])
}

// WHILE LOOP
console.log("------------------------------")
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log(x)
}


// DO-WHILE
console.log("------------------------------")
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
