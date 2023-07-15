let arr = [1, 3, 4, 56, 78, 6];
let details = [
  {
    name: 'surbhi',
    age: 23,
    address: 'sultanganj',
    state: 'Bihar',
    mob: '125346758',
  },
  {
    name: 'supriya',
    age: 23,
    address: 'chhapra',
    state: 'Bihar',
    mob: '789876789',
  },
];
//************** FOREACH FOR....IN, FOR....OF loop uses *****************

// arr.forEach((result) => {
//   console.log(result);
// });

// for (let val of arr) {
//   console.log(val);
// }

// for (let item in details[0]) {
//   console.log(details[0][item]);
// }

// Object.values(details).forEach((item) => {
//   console.log(item);
// });

//***************TYPES OF FUNCTION IN JAVASCRIPT***********************

//1) Named Function

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(4, 5));

//2) Anonymous function

// console.log(function (a, b) {
//   return a + b;
// }(4,5));

//3)Arrow Function
// const sum = (a, b) => a + b;
// console.log(sum(4, 5));

//4)Callbck Function
//function
// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }
// //callback function
// function callme() {
//   console.log('Hi i am a callback function');
// }
// //passing the function as an argument
// greet('Supriya', callme);

//
