// Using Switch case :
// Question:1- Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.

const day = "Friday";
let daysUntilWeekend;
 switch(day){
    case "Monday":
    console.log("There are 6 days until the weekend.");
    break;

    case "Tuesday":
    console.log("There are 5 days until the weekend.");
    break;

    case "Wednesday":
    console.log("There are 4 days until the weekend.");
    break;

    case "Thursday":
    console.log("There are 3 days until the weekend.");
    break;

    case "Friday":
    console.log("There are 2 days until the weekend.");
    break;

    case "Saturday":
    console.log("There are 1 days until the weekend.");
    break;

    case "Sunday":
    console.log("There are 0 days until the weekend.");
    break;
    
    default:
      daysUntilWeekend = "Invalid day";
    break;
 }