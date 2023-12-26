const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr, myArr2)
console.log(typeof(myArr), typeof(myArr2));

// Array Methods
// Array.prototype.includes()
/*includes(searchElement)
includes(searchElement, fromIndex)
*/
console.log("-------------------------------")
/*Zero-based index at which to start searching, converted to an integer:-

Negative index counts back from the end of the array — if fromIndex < 0, 
fromIndex + array.length is used. 
However, the array is still searched from front to back in this case.
If fromIndex < -array.length or fromIndex is omitted, 
0 is used, causing the entire array to be searched.
If fromIndex >= array.length, 
the array is not searched and false is returned.*/
let array1 = [1, 2, 3, 4, 5];
console.log(array1.includes(3, 2))
console.log(array1.includes(3, 3))
console.log()
console.log(array1.includes(3, -1))
console.log(array1.includes(3, -4))
console.log()
console.log(array1.includes(3, 5))

// Array.prototype.join()
console.log("-------------------------------")
/* The join() method of Array instances creates and
returns a new string by concatenating all of the elements in this array, 
separated by commas or a specified separator string.
If the array has only one item, then that 
item will be returned without using the separator.*/
/*join()
join(separator)
*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // Expected output: "Fire,Air,Water"

console.log(elements.join('')); // Expected output: "FireAirWater"

console.log(elements.join('-')); // Expected output: "Fire-Air-Water"
 
// Array.prototype.pop()
console.log("-------------------------------")
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'

/*Calling pop() on non-array objects
The pop() method reads the length property of this. 
If the normalized length is 0, length is set to 0 again 
(whereas it may be negative or undefined before). 
Otherwise, the property at length - 1 is returned and deleted.*/
const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};

console.log(Array.prototype.pop.call(arrayLike)); // 4
console.log(arrayLike); // { length: 2, unrelated: 'foo' }
  
const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.pop.call(plainObj);
console.log(plainObj); // { length: 0 }

/*Using an object in an array-like fashion
push and pop are intentionally generic, and we can use that to our advantage — as the following example shows.
Note that in this example, we don't create an array to store a collection of objects. 
Instead, we store the collection on the object itself and use call on Array.prototype.push and Array.
prototype.pop to trick those methods into thinking we're dealing with an array.*/

const collection = {
    length: 0,
    addElements(...elements) {
      // obj.length will be incremented automatically
      // every time an element is added.
      // Returning what push returns; that is
      // the new value of length property.
      return [].push.call(this, ...elements);
    },
    removeElement() {
      // obj.length will be decremented automatically
      // every time an element is removed.
      // Returning what pop returns; that is
      // the removed element.
      return [].pop.call(this);
    },
};
  
collection.addElements(10, 20, 30);
console.log(collection);
console.log(collection.length); // 3
collection.removeElement();
console.log(collection);
console.log(collection.length); // 2
  
// Array.prototype.push()
console.log("-------------------------------")
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4

// Array.prototype.shift()
console.log("-------------------------------")
const shifted = myFish.shift();

console.log("myFish after:", myFish); // myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted); // Removed this element: angel

// Array.prototype.unshift()
console.log("-------------------------------")
array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // Expected output: 5

console.log(array1); // Expected output: Array [4, 5, 1, 2, 3]

// Array.prototype.slice()
console.log("-------------------------------")
/*The slice() method of Array instances returns a shallow copy of a portion
of an array into a new array object selected from start to end 
(end not included) where start and end represent the index
of items in that array. The original array will not be modified.*/

/*slice()
slice(start)
<!--Zero-based index at which to start extraction, converted to an integer.
Negative index counts back from the 
end of the array — if start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, nothing is extracted.-->

slice(start, end)
<!--Zero-based index at which to end extraction, 
converted to an integer. slice() extracts up to but not including end.

Negative index counts back from the end of the array — 
if end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
If end is positioned before or at start after normalization, nothing is extracted.
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); // Expected output: Array ["camel", "duck"]

console.log(animals.slice()); // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Using slice() on sparse arrays
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]

// Array.prototype.splice()
console.log("-------------------------------")
/*The splice() method of Array instances changes the contents
of an array by removing or replacing existing elements and/or 
adding new elements in place */

/*splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, ... , itemN)*/
const months = ['Jan', 'March', 'April', 'June'];
  // Inserts at index 1
 months.splice(1, 0, 'Feb');
console.log(months);
  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
  // Replaces 1 element at index 4
console.log(months);
  // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
