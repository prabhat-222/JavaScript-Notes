/*

String :- In JavaScript, a string is a data type used to represent text. It’s a sequence of characters enclosed in 
         single or double quotes. 

Template literals :- Template literals allow embedding variables and expressions. Template literals should be in backtics (``) and we can embade a variable with  doller sign ( `${variable}` )

*/

// Define a String :-

let name = "Sarthak"
let town = 'Delhi'
let homeTown = new String('Madhepura')

// Get any letter in string

// console.log(name[2]); // get 2nd index value
// console.log(name[0]); // get 0th index value

console.log(homeTown.__proto__); // All mthode show 

//Methods of string :-

console.log(homeTown.length);  // get string length
console.log(homeTown.toUpperCase()); // string change into Uppercase
console.log(homeTown.toLowerCase()); // string change into Lowercase
console.log(homeTown.charAt(3)); // find character with index
console.log(homeTown.indexOf('e')); // find index of a charector
console.log(homeTown.substring(0, 3)); // last index is not include
console.log(homeTown.trim()); // all extra spaces removed



// slice :-

const newString = homeTown.slice(0, 4) // last index is not include here also
// console.log(newString);

// Replace :- 

const url = "https://github.com/%20prabhat-222"
console.log(url.replace("%20", "-"));
console.log(url.includes('prabhat'));

// change in array

const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.split(" "));

