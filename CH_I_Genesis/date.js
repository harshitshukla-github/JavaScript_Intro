// Dates

let myDate = new Date()
console.log(myDate)

let myCreateDate = new Date("2023-01-15")
console.log(myCreateDate.toDateString())
myCreateDate = new Date("01-15-2023")
console.log(myCreateDate.toDateString())

// Date.now()
/*The Date.now() static method returns the number of milliseconds
elapsed since the epoch, which is defined as the midnight at the
beginning of January 1, 1970, UTC.*/
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreateDate.getTime());

// Date.prototype.toDateString()
/*The toDateString() method of Date instances returns a string representing the
date portion of this date interpreted in the local timezone.*/
console.log(myDate.toDateString())

//Date.prototype.toISOString()
/*The toISOString() method of Date instances returns a string representing this date in the date time string format,
a simplified format based on ISO 8601, 
which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively).
The timezone is always UTC, as denoted by the suffix Z.*/
console.log(myDate.toISOString())

//Date.prototype.toLocaleString()
/*The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date. 
In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.*/
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "IST"
}))
// Date.prototype.toString()
/*The toString() method of Date instances returns a string representing
this date interpreted in the local timezone.*/
console.log(myDate.toString())
console.log("======================")
const eventa = new Date('August 19, 1975 23:15:30');
console.log(eventa.toString());