/*
Operations +++++++++++++++++++++++++++++++++++++++++++++++++

' + ' :- Add two values
' - ' :- Subtract two values
' * ' :- Multiply two values
' ** ' :- power (2 ** 3 = 2 rage to the powr 3)
' / ' :- Devide two values
' % ' :- Get remainter
*/

// Examples :- 

let str1 = "Prabhat"
let str2 = " Kumar"

let str3 = str1 + str2
console.log( str3);

// When we add a number with string

console.log(1 + "2"); // it is 12 not 3

console.log("1" + 2 + 2); // first "1" + 2 = 12(string) and second "12" + 2 = 122(string)

console.log(1 + 2 + "3"); // first 1 + 2 = 3(number) and second 3 + "3" = 33(string) 

console.log(1 + 2 * "3");


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let x = 3;
const y = x++;  // current value return first then increament.

console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  // Value increament first then the value is return.

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// +++++++++++++++++++++++++++++++++++++  Comparison ++++++++++++++++++++++++++++++++++++

/*
Comparison always return boolean value.

Comparison Operators :- 

( == )  -->  equal to {check only value}
( === )  --> strict equal to { check datatype also}
( < ) & ( <= )  --> less then & less then equal to
( > ) & ( >= )  --> grater then & grater then equal to
( != ) & ( !== )  --> not equal to & strict not equal to

Note :- Should compare only same data type for predictable result

*/

// Example :- 

console.log("2" == 2);  // true
console.log("2" === 2);  // false



