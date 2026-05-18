/*
There are two data types in javascript on the basis of memory.

(1) Primitive :- It is Immutable. It has stack memory.

=>  Primitive Data Types :-
String
Number
Boolean  (true or false)
Undefined
Null
BigInt
Symbol

(2) Non-Primitive :- It is mutable. It has heap memory

=> Non-Primitive Data Types :-
Object
Array
Function


Null =>  Intentional empty value (type => onject)
Undefined => Variable declared but value not assigned (type => Undefined)

*/

// Example ++++++++++++++++++++++++++++++++++++++++++++++++++

let name = "Prabhat" // String
let age = 25 // Number
let isLoggedIn = true // Boolean

// Check type of datatype :-

console.log(typeof name);
console.log(typeof(name));

// Conversion data types :-
// Examples :-

let score = "99" // it is string

let scoreNum = Number(score) // now score is change into number

console.log(typeof(score));
console.log(typeof(scoreNum));

// When we convert a string ("a to z") to number it will return NaN.
// If i want to change null into number it will return 0.  (true => 1,  false => 0)
// Example :-

let myName = "Govind"
let nameNum = Number(myName);

console.log(nameNum);


//++++++++++++++++++++++++++++++++++++++++++++ Stack and Heap memory +++++++++++++++++++++++++++++++++++++++++

/*

(1) Stack memory :- for premitive data types. ( Here we get a copy of data original data not changed )
(2) Heap memory :- for non-premitive data types. ( Here we get reference of original data and original data changed )

*/
