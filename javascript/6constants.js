//           var  = we can redeclare and reassign
//           let  = we can't redeclare but we can reassign
//           const= we neither redeclare or reassign

var a=10;
var a// declaration
a=10;//assignment

//  var-reassign
var a=10;
a=11;
console.log(a);//  11
// var-redeclare
var a=10;
var a=11;
console.log(a);//  11

// //  let-reassign
// let a=10;
// a=11;
// console.log(a);//  11
// // let-redeclare
// let a=10;
// let a=11;
// console.log(a); //  Uncaught SyntaxError: Identifier 'a' has already been declared

// // const-reassign
// const c=10;
// c=7;
// console.log(c);// Uncaught TypeError:  Assignment to constant variable at 6constants.js:29:2
// // const-redeclare
// const r=10;
// const r=7;
// console.log(r);// Uncaught TypeError:  Identifier 'r' has already been declared

console.log(d);// undefined
var d=6;

console.log(u);//    Uncaught ReferenceError: Cannot access 'u' before initialization
let u=5;

console.log(k);//  Uncaught ReferenceError: Cannot access 'k' before initialization
const k=2;

//      global and block scope 

// Global scope  => var
// Block  scope  => let, const

