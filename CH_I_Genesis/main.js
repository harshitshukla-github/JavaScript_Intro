"use strict" // Treat all JS Code as newer version
console.log("Hello CodeSpaces");
// Chapter-I:- var, let, const

const a_string = "Hello"

var another_string = "Something Different"

// a_string += "World!" - TypeError
console.table([a_string, another_string])

console.log("-------------------------------------")
//Chapter-II:- Datatypes -> Primitives -> 
// strings
// number, bigint
let big = BigInt("1234678636828")
console.log(big)
// null => standalone Value| undefined
// symbol => Uniquness

console.log("-------------------------------------")
// Chapter-III:- Type conversion
let score = "33"

let score_numeric = Number(score)
console.log(score_numeric)

let score1 = "banana"
let score1_numeric = Number(score1)
console.log(score1_numeric)

let score2 = null
let score2_numeric = Number(score2)
console.log(score2_numeric)

console.log("-------------------------------------")
// Chapter-IV:- Type Anomalies
console.log("1" + 2);
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log()
console.log(+"")
console.log(+true)

console.log()
// Type coercion:- Convert the string to a number
console.log("11" > 10, 10 < "11", "011" > 10, 10 < "011")
console.log("11" >= 10, 10 <="11", "011" >= 10, 10 <= "11")

// Null 
console.log()
console.log("1" > null, 1 > null, 0 > null, 0 >= null)
console.log(1 == null, 0 == null, "0" == null, "1" == null, undefined == null, NaN == null)

// Undefined
console.log()
console.log(1 > undefined, 0 > undefined, 0 == undefined, 1 == undefined, 0 < undefined)

console.log("-------------------------------------")
// Chapter-V:- Post & Pre Increment
let the_variable = 10

// post-increment operator:-
//It increments the value of var by 1, but the value returned by the expression is the value of var before the increment
console.log(the_variable++)
console.log(the_variable)

console.log(++the_variable)
console.log(the_variable)