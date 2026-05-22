/*

object :- The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

   =>>>> Objects can be created using the Object() constructor or the object literal.
   =>>>> If you will create an object with constuctor methode then it will always be a singleton object.
   =>>>> We cane store any data type in object with a key.

singleton object :- In JavaScript, a Singleton Object is an object that has only one instance created.


*/

// Create objects :-

// const obj1 = Object.create() // Constructor methode
const obj2 = {} // Literal methode

// Examples :-

// Define a symbol :-

const mySymb = Symbol("key1")

let jsUser = {
    name: "Prabhat",
    [mySymb]: "Symbole key",  // Symbole as a key 
    "fullName": "Prabhat Kumar",
    age: 25,
    location: "Delhi",
    email: "prabhattest@google.com",
    isLoggedIn: false
}

// Get object value :-

console.log(jsUser.name); // First methode

console.log(jsUser["email"]); // Second methode

// if You define your keys in double or single quote like this ( "fullName": "Prabhat Kumar" ) then you can only access to below methode.

console.log(jsUser["fullName"]);
console.log(typeof jsUser[mySymb]);  // use symbol key 

// Overright the value :-

jsUser.email = "prabhat2929@gmail.com"
console.log(jsUser);

// If you want that no one change the value of your object the you can freez the object.

// Object.freeze(jsUser);  // Now we cant overright the value of object.

// add greeting :-

jsUser.greeting = () => {
    console.log(`Hello! , ${jsUser.fullName}`);
}

console.log(jsUser.greeting());

// +++++++++++++++++++++++++++++++++++++++++++++  Object Nesting  ++++++++++++++++++++++++++++++++++++++++++++

let tinderUser = {
    userFullName: {
        username: {
            firstName: "Prabhat",
            lastName: "Sharma"
        }
    }
}

console.log(tinderUser.userFullName.username.firstName);
console.log(tinderUser.userFullName?.username.lastName); // I use " ? " this for optional chaning.. if "userFullName" not exist the optional chaining handle it.

// Mearging object :-

let objA = {1: "a", 2: "b"}
let objB = {3: "c", 3: "d"}

let objC = Object.assign({}, objA, objB)  //  first methode to mearge object. here empty braces " {} " use for target and other object is source.
console.log(objC);

let meargeObj = {...objA, ...objB}   //  Second methode to mearge object. (spread Operator)
console.log(meargeObj);


// get all keys of an object.

let allKeys = Object.keys(jsUser);  // It will return an Array of all keys
console.log(allKeys);


// get all value of an object.

let allVal = Object.values(jsUser);  // It will return an Array of all values.
console.log(allVal);

// entries methode :-

console.log(Object.entries(jsUser));  // it will return every key value in array.

//  Check value exist or not :-


console.log(jsUser.hasOwnProperty("isLoggedIn"));

// Destructure of an object :-

let product = {
    name: "Table",
    price: "888",
    platform: "flipkart"
}

const {price} = product;  // Now we can write simply price for value not product.price.

console.log(price);



