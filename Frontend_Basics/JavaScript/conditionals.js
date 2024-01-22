/* Author: Pogi Tangkad
   JavaScript file for conditionals.html
*/

console.log("JavaScript Conditionals");

const age = 15;

if (age >= 16 && age <= 89) {
  console.log("You can drive.");
} else if (age < 14 || age >= 90) {
  console.log("You can't drive");
} else {
  console.log("You can get a learner permit.");
}

if (age > 100) {
  console.log("You are quite old.");
} else {
  console.log("You still have time.");
}

const age1 = prompt("Enter your age: ");
console.log(age1);

if (age1 > 12 && age1 <= 60) {
  alert("you can ride the rollercoaster");
} else if (age1 < 8 || age1 > 70) {
  alert("you can't ride the coaster");
} else {
  alert("you can ride with another person");
}
