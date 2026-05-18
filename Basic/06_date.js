/*
Date :- JavaScript Date objects represent a single moment in time in a platform-independent format. It is defined from midnight January 1, 1970.

=> When we create any date it will return a long string .
=> Date is an object type in javascript.
=> Month is started from 0 like 0 for January, 1 for February etc.

*/

// Define a date :-

let newDate = new Date(); // this is not readable.
console.log(newDate);

// Make the dete readable :-

console.log(newDate.toString());  // first methode return this type of date  -> " Mon May 18 2026 10:43:26 GMT+0530 "
console.log(newDate.toLocaleDateString()); // second methode return this type of date -> " 5/18/2026 "
console.log(newDate.toLocaleString());  // Third methode return this type of date -> " 5/18/2026, 10:46:29 AM "
console.log(newDate.toTimeString()); // Fourth methode return this type of time -> " 10:47:24 GMT+0530 "

// Define a specific date :-

let specificDate = new Date(2024, 10, 17)
console.log(specificDate.toDateString());

// Change date formate :-  we can put our date in formate.

let myDate = new Date("2024-01-12") // Here month start at 1 . ( yy/mm/dd )
console.log(myDate.toLocaleString());

let anotherDate = new Date("01-14-2025")
console.log(anotherDate.toLocaleString()); // Here month start at 1 . ( mm/dd/yy )

// Timestamp :- 

let newTimstamp = Date.now() // It is return milisecond time
console.log(newTimstamp);

// If you want to compare date then you prefer milisecond value.
// Change the miliseconds :- 

console.log(Math.floor(newTimstamp/1000));

// Some methods :-

let hereDate = new Date()

console.log(hereDate.getMonth());  // Get month from date. here month start at 0.
console.log(hereDate.getDay());  // Get day from date
console.log(hereDate.getFullYear());  // Get fullYear from date

// Customize .toLocalString methode :-

console.log(hereDate.toLocaleString('default', {
    weekday: "long"
}));

