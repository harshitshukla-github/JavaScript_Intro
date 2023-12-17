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
console.log(str4.includes("To be", 0)); // true
console.log(str4.includes("TO BE")); // false
console.log(str4.includes("")); // true

console.log("-------------------------------------------")
// 10. String.prototype.indexOf()
/*indexOf(searchString)
indexOf(searchString, position) */
// The index of the first occurrence of searchString found, or -1 if not found.
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

/*Searching for an empty search string produces strange results.
With no second argument, 
or with a second argument whose value is less than the calling string's length,
the return value is the same as the value of the second argument: */
console.log("Blue Whale".indexOf("")); // returns  0
console.log("Blue Whale".indexOf("", 9)); // returns  9
console.log("Blue Whale".indexOf("", 10)); // returns 10
console.log("Blue Whale".indexOf("", 11)); // returns 10

console.log("-------------------------------------------")
// 11. String.prototype.isWellFormed()
/*The isWellFormed() method of String values returns a boolean
indicating whether this string contains any lone surrogates.*/

const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

console.table(strings)

const illFormed = "https://example.com/search?q=\uD800";

/*try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}*/

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}

console.log("-------------------------------------------")
// 12. String.prototype.lastIndexOf()

/*indexOf(searchString)
indexOf(searchString, position) */
// The index of the first occurrence of searchString found, or -1 if not found.
console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);

const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

console.log("-------------------------------------------")
// 13. String.prototype.localeCompare()
/*
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
 */
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b)); // Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // Expected output: 0

console.log("-------------------------------------------")
// 14. String.prototype.match()
/*The match() method of String values retrieves the result of matching
this string against a regular expression. */
//regexp
/*A regular expression object, or any object that has a Symbol.match method.*/

const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph1.match(regex);

console.log(found);// Expected output: Array ["T", "I"]

const str5 = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found1 = str5.match(re);

console.log(found1);

// Using global and ignoreCase flags with match()
const str6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str6.match(regexp);

console.log()
console.log(matches);// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

//Using named capturing groups
const paragraph2 = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found2 = paragraph2.match(capturingRegex);
console.log(found2.groups); // {animal: "fox"}

// Using match() with a non-RegExp implementing @@match
const str7 = "Hmm, this is interesting.";

console.log(str7.match({
  [Symbol.match](str7) {
    return ["Yes, it's interesting."];
  },
})); // returns ["Yes, it's interesting."]

console.log("-------------------------------------------")
// 15. String.prototype.matchAll()
/*The matchAll() method of String values returns an iterator of all results matching 
this string against a regular expression, including capturing groups. */
const regexp1 = /t(e)(st(\d?))/g;
const str8 = 'test1test2';

const array = [...str8.matchAll(regexp1)];

console.log(array[0]); // Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]); // Expected output: Array ["test2", "e", "st2", "2"]

// match() vs matchAll()
const regexp2 = /foo[a-z]*/g;
const str9 = "table football, foosball";
let match;

console.log("\n")
// Found football start=6 end=14.
// Found foosball start=16 end=24.
while ((match = regexp2.exec(str9)) !== null) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${regexp2.lastIndex}.`,
  );
}

const matches1 = str9.matchAll(regexp2);
console.log("\n")
for (const match of matches1) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}

console.log("-------------------------------------------")
// 16. String.prototype.normalize()
/*normalize()
normalize(form)*/

/*String.prototype.normalize() is a JavaScript method that returns
the Unicode Normalization Form of a given string. This can be useful
for comparing strings that look the same but have different code points,
such as “ñ” and “ñ”. You can specify one of four forms:
“NFC”, “NFD”, “NFKC”, or “NFKD”, depending on whether you want
to use canonical or compatibility decomposition and composition.*/

let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ
string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");
console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2

console.log()
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`); // Expected output: "Amélie, Amélie"
console.log(name1 === name2); // Expected output: false
console.log(name1.length === name2.length); // Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`); // Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC); // Expected output: true
console.log(name1NFC.length === name2NFC.length); // Expected output: true

console.log("-------------------------------------------")
// 17.|18. String.prototype.padEnd()| String.prototype.padStart()
/*padEnd(targetLength)
padEnd(targetLength, padString)
*/
/* The padEnd() method of String values pads this string with a given string
(repeated, if needed) so that the resulting string reaches a given length.
The padding is applied from the end of this string.*/

const str10 = 'Breaded Mushrooms';
console.log(str10.padEnd(25, '.')); // Expected output: "Breaded Mushrooms........"

const str11 = '200';
console.log(str11.padEnd(5)); // Expected output: "200  "

const str12 = '5';

console.log(str12.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber); // Expected output: "************5581"