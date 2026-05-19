/*

Array :- Array is an object, storing a collection of multiple items under a single variable.
=> Array is a non-premitive data type in javascript
=> Here array is an object so here key is index.
=> we can define a array with " [] " square bracket.
=> All the value in array are called elements.
=> We can store different data type value in same array with coma saperated.
=> Array indexing start from 0.

*/

// Declear an array

let arr1 = [1, 2, 3, "Rose", "Lotus", true, [], {}]
let actors = new Array("Hritik", "Amitabh", "Vijay Thalapathy")
console.log(actors);

// Examples :-

let arr2 = [1, 2, 3, 4, 5, 6]

// Access value of an array :-

console.log(arr2[2]);  // arr[index]

/*

If copy methode perform on an array theng we get a shallow copy of array.

(1) Shallow copies :- A shallow copy of an object is a copy whose properties share the same references. it means if i change anything it will also change in original array.

(2) Deep Copies :- A deep copy of an object is a copy whose properties do not share the same references.

*/


// Methodes of array :-

let myArr = [101, 102, 103, 104, 105]

myArr.push(100)    // =>>>>   This methode add the value in the end of an array.
console.log(myArr);

myArr.pop()    // =>>>>   This methode remove the last value of an array.
console.log(myArr);

myArr.unshift(100)    // =>>>>   This methode add the value in the start of an array.
console.log(myArr);

myArr.shift()     // =>>>>   This methode remove the first value of an array.
console.log(myArr);

console.log(myArr.includes(100));  // it will return true or false. if the value is in your array then return true and otherwise resturn false.

let stringVal = myArr.join()  // this methode took all the value of an array and convert into in a string.
console.log(stringVal);  // type of " stringVal " is now string.


// +++++++++++++++++++++  Slice and Splice +++++++++++++++++++++++++++++++++++++++++++++++

/*

Slice :- This methode take starting and ending undex. Here ending index does not include in the range. 
      =>>> Slice takes all the elements from the given range and returns a new array of those elements.
      =>>> Here our original array does not change.

*/

// Example :-

let numArr = [1, 2, 3, 4, 5, 6, 7]
let numArr2 = numArr.slice(1, 5)  // Here last index does not include in the range.
console.log("A :", numArr);
console.log("B :", numArr2);
 
/*

Splice :- This methode take starting and ending undex. Here ending index include in the range. 
      =>>> Splice remove all the elements from the given range from original array and then create a new array.
      =>>> Here original array also changed.

*/

// Example :- 

let numArr3 = numArr.splice(1, 4)  // Here last index includes in th range.
console.log("C :", numArr);
console.log("D :", numArr3);


//  ++++++++++++++++++++++++++++++++++++  Functions Of Array  ++++++++++++++++++++++++++++++++++++++


const sauthActor = ["Vijay Thalapathy", "Prabhash", "Yash", "Ramcharan"]
const bollywoodActor = ["Amitabh", "Akshay", "Hritik", "Sanjay dutt"]

// Mearging array :-   

// Concat methode :- This methode return a new array with the elements of both array. This methode can use two array only.

const meargeArr =  sauthActor.concat(bollywoodActor);
console.log(meargeArr)

// Another way

// Sprade operator :- This methode concat two or more arrays and return a new array.

const newMeargeArr = [...sauthActor, ...bollywoodActor] 
console.log(newMeargeArr);

// flat :- This methode return a new array with all sub-array elements. 
// Example :-

let nestArray = [1, 2, [2, 3, 4, [4, 5, 6, [6, 7]]]]

let real_nestArray = nestArray.flat(Infinity);  // flat methode return this here =>>  [ 1, 2, 2, 3, 4, 4, 5, 6, 6, 7 ]
console.log(real_nestArray);

// convert an array :-
// Array.from() :- This methode convert the given value in an array.
// Example :-

console.log(Array.isArray("Prabhat"));  // It will return false because " Prabhat " is a string.
console.log(Array.from("Prabhat"));  // It will change given string in an array like this =>>> [ 'P', 'r', 'a' 'b', 'h', 'a', 't' ]

// If you use an object to convert into array then you have to define whitch array you want key or value.

// Example :-

const obj = {
  name: "prabhat",
  score: 200
};

const keys = Array.from(Object.keys(obj)); // This is for key array.
console.log(keys);

const value = Array.from(Object.values(obj)); // This is for value array.
console.log(value);


