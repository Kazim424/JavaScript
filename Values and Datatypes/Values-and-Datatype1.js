// Question-1

// Create a jaascript file, using jaascript comments, List all the datatypes of Javscript, and specify an
// example for each of them.

// The Following are the data types of Javascript.
// 1. String
// 2. Number
// 2.1- Integer:9
// 2.2 - Flowting_Value:10.2
// 2.3 Infinity: Number.Positive_Infinity,Number. Negative_Infinity,
// 2.4  Not a number
// 3.Bigint
// 4.Boolean
// 5.Undefined
// 6.Null
// 7.Symbol
// 8.Object

  //1.String

let str = "I am happy to join PW Skills FSWD Course"
console.log(str);  


  //2.  integer

let int = 9;           
      console.log(int);  

//3.floating value

let Floting_Value = 10.2;  
console.log(Floting_Value);

//4. positive_infinity;

// let positive_infinity = 5/0;                              
// console.log(positive_infinity);  

// Or
let pos = Number.POSITIVE_INFINITY;
console.log(pos);

   //5. negative_infinity

// let negative_infinity = -9/0;                         
// console.log(negative_infinity); 

// or

let neg = Number.NEGATIVE_INFINITY;
console.log(neg);

//6. Not a NUmber

// let num3 = 5/ "sonu" ;
// console.log(num3);

let not = NAN ;
console.log(not);


//7. BIgint Data type

let Bigint = 1024n;
console.log("Bigint is:" +Bigint);

//8. Boolean Data type

let bool = true;
console.log(bool);

let bool2 =false;
console.log(bool2);

//9. Undefined data type

let num4=undefined ;
console.log(num4);

//10. Null data type

let num5 = null;
console.log(num5);

//11. Symbol

const sym1 = Symbol('PW Skills');
console.log(sym1);

//12. Array

let arr = [1, 2, "PW"];
console.log(arr);

//13. Object

let obj = {
    name: "PW Skills",
    course: "FSWD"
};
console.log(obj);




