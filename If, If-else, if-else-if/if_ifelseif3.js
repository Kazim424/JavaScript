// Using  this condition any one If, If-else, if-else-if

// Question:3- Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
// by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
// the numbers divisible by 3 or 5.

let number = 3;
if(number % 3 == 0 && number % 5 == 0 ){
    console.log("FizzBuzz");
    
}
else if(number % 5 == 0){
console.log("Buzz");
}
else if(number % 3 == 0){
    console.log("Fizz");
}
else{
    console.log("Invalid Input")
}