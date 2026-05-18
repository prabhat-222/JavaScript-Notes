// Define a number :-

const score = 400

const balance = new Number(12000)
console.log(balance);

// Some methodes of number :-
 console.log(typeof balance.toString());  // change number to string
 console.log(balance.toFixed(2)); // here 2 means decimal number are two  ex- 12000.00


 const floatingNumber = 33.8627

 console.log(floatingNumber.toPrecision(3));  // 3 means precision focus on 3 number at strat. It will restun string. Precision will roundoff your floating number

 const currency = 1000000000000000000

 console.log(currency.toLocaleString('en-IN')); //  it is adding " , " accordint to given currency


 // ++++++++++++++++++++++++++++++++++++++ ( Math ) +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // run into at broeser.

// methodes :-

console.log(Math.abs(-2)); // abs stand for absolute it means abs change the negative number into postive
console.log(Math.round(3.6)); // It will roundoff the floating value
console.log(Math.ceil(4.3)); // it will choose upper value ( here we get 5 )
console.log(Math.floor(4.6)); // It will choose the lower value ( here we get 4 )
console.log(Math.min(3,4,2,6,4)); // it will return lowest value from given numbers.
console.log(Math.min(3,4,2,6,4)); // it will return highest value from given numbers.

// Generate random number

// Math.random()  :- It will return random and floating value between 0 & 1.

console.log(Math.random());

console.log((Math.random() * 10) + 1); // it will return between 1 to 9 and first number never be 0 . if you don't need floating value then you can wrap this in Math.foor().

// We can define the range of number that we can get :- 

const minVal = 20
const maxVal = 30

console.log(Math.floor((Math.random() * ( maxVal - minVal + 1)) + minVal)); // here also we don't get 0,



