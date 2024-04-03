//Writing comments
//Custom Function to display/hide date by manipulating the DOM.
function customDate() {
  if(document.getElementById('demo').innerHTML){
    document.getElementById('demo').innerHTML = "";
    window.alert("Hiding the Date and Time.");
  }
  else {
    document.getElementById('demo').innerHTML = Date();
    window.alert("Displaying the Date and Time.");
  }
}

// Refer to w3schools
// How to create variables:
let x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

/*
Multi Line comments
*/

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// Strings
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
let part = text.slice(7, 13);
part = text.slice(-12);

// To show output
console.log(part);
x = 123;
y = x.toString();

// For loop
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

console.log(text);