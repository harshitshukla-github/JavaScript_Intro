const balance = new Number(100)
console.log(balance)

console.log("-----------------------------")
//Number.prototype.toFixed()
// toFixed(2)
console.log(balance.toFixed(2))

console.log("-----------------------------")
// Number.prototype.toLocaleString()
const million = 1000000
console.log(million.toLocaleString())
console.log(million.toLocaleString("en-IN"))

console.log("-----------------------------")
//Number.prototype.toPrecision()
const otherNumber = 123.8966
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'

console.log("-----------------------------")
//Number.prototype.valueOf()
const numObj = new Number(42);
console.log(typeof numObj); // Expected output: "object"

const num1 = numObj.valueOf();
console.log(num1); // Expected output: 42

console.log(typeof num1); // Expected output: "number"