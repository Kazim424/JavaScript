/*
Using  this condition any one If, If-else, if-else-if

Question:-1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop.

*/

let traffiic_light = "red";

if(traffiic_light == "green"){
    console.log("Vehicles may proceed  with caution");
}
else if(traffiic_light == "red"){
    console.log("Vehicles must stop");
}
else if(traffiic_light == "orange"){
    console.log("Vehicles must wait. THe signal  is changing to red or green");
}
else{
    console.log("Invalid traffic light");
}