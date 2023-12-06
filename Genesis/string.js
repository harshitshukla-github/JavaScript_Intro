const a_string = new String("Hello World!")

console.table([a_string[0], a_string[1], a_string[2], a_string[3],
    a_string[4], a_string[5], a_string[6], a_string[7],
    a_string[8], a_string[9], a_string[10], a_string[11]])

// String Methods:-
// 1. String.prototype.at() [Adaptive with -ve numbers]
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

// Expected output: "An index of 5 returns the character u"
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

index = -4;

// Expected output: "An index of -4 returns the character d"
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

// 2. String.prototype.charAt()
let b_index = 4;

console.log()
console.log('The quick brown fox jumps over the lazy dog.'.__proto__.charAt(b_index))
// Expected output: "The character at index 4 is q"
console.log(`The character at index ${b_index} is ${sentence.charAt(b_index)}`);

console.log("-------------------------------------------")
// 3. String.prototype.charCodeAt()
/*The charCodeAt() method of String values returns an integer
between 0 and 65535 representing the UTF-16 code unit at the given index.*/
console.log(
    `Character code ${sentence.charCodeAt(b_index)} is equal to ${sentence.charAt(
      b_index,
    )}`,
  );

  const str = "𠮷𠮾";
  console.log(str.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
  console.log(str.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character

// 4. String.prototype.codePointAt()
//This method returns the Unicode value at an index (position) in a string2. 
//It can return the full value of a Unicode value greater than 0xFFFF (65535), which .charCodeAt() cannot.
console.log(str.codePointAt(0)); // 134071

const icons = '☃★♲';

console.log(icons.codePointAt(1)); // Expected output: "9733"

console.log("-------------------------------------------")
//5. String.prototype.concat()
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));// Expected output: "Hello World"
console.log(str2.concat(', ', str1));// Expected output: "World, Hello"

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!"

console.table(["".concat({}),  // "[object Object]"
              "".concat([]),   // ""
              "".concat(null), // "null"
              "".concat(true), // "true"
              "".concat(4, 5), // "45"
])

console.log("-------------------------------------------")
//6. String.prototype.endsWith()
// endsWith(searchString, endPosition) 
/*The end position at which searchString is expected to be found
(the index of searchString's last character plus 1). Defaults to str.length.*/
const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!')); // Expected output: true

console.log(str3.endsWith('best', 17));

console.log("-------------------------------------------")
// 7.|8. String.fromCharCode and String.fromCodePoint
/*Both String.fromCharCode and String.fromCodePoint are static methods that take a 
sequence of Unicode code points and return a string.
The difference is that String.fromCharCode can only handle code points between 0 and 65535,
while String.fromCodePoint can handle any valid code point, including those above 65535*/

console.table([String.fromCharCode(65), // returns "A"
              String.fromCodePoint(65), // returns "A"
              String.fromCharCode(128512), // returns "�" (invalid character)
              String.fromCodePoint(128512)]) // returns "😀" (emoji)

console.log(String.fromCharCode(189, 43, 190, 61));
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

console.log("-------------------------------------------")
//9. String.prototype.includes()
/* includes(searchString)
includes(searchString, position)*/
//position Optional
//The position within the string at which to begin searching for searchString. (Defaults to 0.)
const sentence1 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence1.includes(word) ? 'is' : 'is not'
  } in the sentence`,
); // Expected output: "The word "fox" is in the sentence"

const str4 = "To be, or not to be, that is the question.";

console.log(str4.includes("To be")); // true
console.log(str4.includes("question")); // true
console.log(str4.includes("nonexistent")); // false
console.log(str4.includes("To be", 1)); // false
console.log(str4.includes("To be", 0)); // false
console.log(str4.includes("TO BE")); // false
console.log(str4.includes("")); // true

console.log("-------------------------------------------")
// String.prototype.indexOf()
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
); // Expected output: "The index of the second "dog" is 38"

// The index of the first occurrence of searchString found, or -1 if not found.