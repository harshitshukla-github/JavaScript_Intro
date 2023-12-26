// Singleton

// Object Literals
const mySymbol = Symbol("A specific key")

const JsUser = {
    name: "Harshit",
    [mySymbol] :"SymbolMapper01",
    age: 31,
    email: "harshit@openai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "harshitS@openai.com";
console.log(JsUser);

// Object.assign()
console.log("----------------------------------------")
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target); // Expected output: true

console.log()
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.


// Object.freeze(obj)
console.log("----------------------------------------")
Object.freeze(JsUser);

JsUser.email = "harshit@openai.com";
console.log(JsUser);

// Object.groupBy(items, callbackFn) [Directly not accessable in Node]
console.log("----------------------------------------")
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

// const result = Object.groupBy(inventory, (items) => {return items.type});
// console.log(result)
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

// Object.keys()
console.log("----------------------------------------")

