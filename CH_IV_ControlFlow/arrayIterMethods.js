// forEach
const coding = ["javascript", "ruby", "java", "python", "c++"]


/* coding.forEach((item, index, arr) => {
  console.log(item, index, arr)
})
*/

// The forEach method does not modify the original array, it executes the provided function for each element.
// To store the values, you need to create a new array.
const upperCasedCoding = [];
coding.forEach(function (lang) {
  upperCasedCoding.push(lang.toUpperCase());
});

console.log(upperCasedCoding);

const arrOfObjects = [
  {languageName: "JavaScript", fileExtension: ".js"},
  {languageName: "Python", fileExtension: ".py"},
  {languageName: "Java", fileExtension: ".java"},
  {languageName: "TypeScript", fileExtension: ".ts"},
  {languageName: "Jupyter Notebooks", fileExtension: ".ipynb"}]

arrOfObjects.forEach(({languageName:lang, fileExtension:ext}) =>{
  console.log(`The programming language ${lang} is \`${ext}\``)
})

// filter
console.log("-----------------------------------------------------")
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterNums = myNums.filter(function (nums) {
  return nums > 4
})

console.log(filterNums)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === 'Non-Fiction')
console.log(userBooks)

userBooks = books.filter((books) => {
  return books.genre === "Non-Fiction" && books.edition > 2000
})

console.log(userBooks)

console.log("-----------------------------------------------------")
//map()
let square_value = myNums.map((vals) => vals ** 2)

console.log(square_value)

/* Chaining */
square_value =  myNums.map((vals) => vals ** 2).filter((vals) => vals % 2 === 0)
console.log(square_value)


console.log("-----------------------------------------------------")
//reduce()

/*The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value. */

const array1 = [1, 2, 3, 4];

// 1 * 2 * 3 * 4 = 24
const initialValue = 1;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue
);

console.log(sumWithInitial); // Expected output: 10

const shoppingCart = [
  {
      itemName: "js course",
      price: 19
  },
  {
      itemName: "py course",
      price: 19
  },
  {
      itemName: "mobile dev course",
      price: 59
  },
  {
      itemName: "data science course",
      price: 129
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
  console.log(`accmulator: ${acc} item: ${item}`)
  return acc + item.price
}, 0)

console.log(priceToPay);