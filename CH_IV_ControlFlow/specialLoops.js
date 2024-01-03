// for-of Loop | for-in Loop

// 1. Array
const arr = [1, 2, 3, 4, [5, 6]]

for (const num of arr){
  console.log(num);
}

for (const index in arr){
  console.log(index, ":->", arr[index])
}

// 2. Maps
console.log("---------------------------------")
const map = new Map()
map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")

console.log(map)

for (const [code, country] of map){
  console.log(code, "-->", country)
}

for (const mapper of map){
  console.log(mapper)
}

// 3. Objects
console.log("---------------------------------")
const MyObject = {
  "Abalone" : "marine snail",
  "Atlantic Blue Marlin" : "Istiophotidae",
  "Beluga Whale" : "cetaceans",
  "Giant Pacific Octopus" : "Cephalopoda",
  "Green Turtle": "Cheloniidae"
}

for (const key in MyObject){
  console.log(`${key} is a ${MyObject[key]}.`)
}