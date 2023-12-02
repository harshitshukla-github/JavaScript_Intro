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
// Chapter-IV:- Operations
// Mathematical Operators:- +, -, *, /, %, ** 
console.log("1" + 2);
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")