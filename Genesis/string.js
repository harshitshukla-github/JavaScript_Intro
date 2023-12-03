const a_string = new String("Hello World!")

console.table([a_string[0], a_string[1], a_string[2], a_string[3],
    a_string[4], a_string[5], a_string[6], a_string[7],
    a_string[8], a_string[9], a_string[10], a_string[11]])

// String Methods:-
// 1. String.prototype.at() [Adaptive with -ve numbers]
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// 2. String.prototype.charAt()
let b_index = 4;

console.log()
console.log('The quick brown fox jumps over the lazy dog.'.__proto__.charAt(b_index))
console.log(`The character at index ${b_index} is ${sentence.charAt(b_index)}`);
// Expected output: "The character at index 4 is q"

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