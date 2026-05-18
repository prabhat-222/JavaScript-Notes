/* 

Variable :- In JavaScript, a variable is a container used to store data that you can use and manipulate in your program.

 Variable declere with three  keywords : -

=> const :- it has block scope. ( Cannot be updated or re-declared )
=> let :- it has also block scope. ( Can be update the value, but not re-declared in the same scope )
=> var(old) :- it has globle or functional scope. ( Can be re-declared and updated ) never use var.

Our variable name in "camelCase" is good approach.

*/

// Examples ++++++++++++++++++++++++++++++++++++++++

var userName = "Prabhat kumar" // can update and re-declared 
let userId = 35363  // can update but can't redeclared
const accountPassword = "prabhat@111"   // Cannot be updated or re-declared 

const email = "prabhat11@test.com"
const city = "Delhi"
const password = "Prabhat@123"

let userState;  // return undefind

// console.log(userName, userId);

console.table([email, city, password])


