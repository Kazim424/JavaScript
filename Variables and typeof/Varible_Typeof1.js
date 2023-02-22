/*
Question:1- Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored.
*/

//1.String

let str = "PW Skills is best for all other courses"
console.log(typeof str);

//2.Number
// i. Integer
let num1 = 9;
console.log(typeof num1);

// ii. Floting value
let num2 = 23.5;
console.log(typeof num2);

// iii. infinity
// positive infinity
let num3 = 4/0;
console.log( typeof num3);
//  and
 let num4 = Number.POSITIVE_INFINITY;
 console.log(typeof num4) ;
//  negative infinity
let num5 = -4/0;
console.log( typeof num5);
// and 
let num6 = Number.NEGATIVE_INFINITY;
 console.log(typeof num6) ;

//  Not A Number
let var7 = NaN;
console.log(typeof var7);


// 3.BigInt

let var1 = 234545n;
console.log(typeof var1);

// 4.Boolean
let var2 = false;
console.log(typeof var2);

// 5.Undefined

let und = undefined;
console.log(typeof und);

// 6.Null
let var3 = null;
console.log(var3);

// 7.Symbol
 let sym = Symbol("Hello Sonu");
 console.log(typeof sym);

// 8. Objects

// (i). Object
 let var4= {
    name: "Harry",
    course: "Web development",
    DOB: "15-jan-2018",
 }
 console.log(typeof var4);

 //(ii).Array

 let arr=[1, 2, 3, 5.67, 8,"Sonu"];
 console.log(typeof arr);
