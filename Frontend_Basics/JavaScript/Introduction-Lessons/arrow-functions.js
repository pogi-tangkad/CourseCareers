/* Author: Pogi Tangkad
   JavaScript file for arrow-functions.html
*/

console.log("JavaScript Arrow Functions");

let displayText = document.getElementById("arrowFunctionsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Arrow Functions!<br>";

const func = () => {
  console.log("hello");
};
func();

const func1 = (x, y) => {
  return x + y;
};
console.log(func1(3, 9));

const func2 = (x, y) => x * y;
console.log(func2(3, 7));

/*
difference from using standard function vs. arrow function.

standard function accesses its value from where it was called
(object or global, etc)
arrow functions get its context from where it was defined
*/

function getName() {
  return this.firstName + " " + this.lastName;
}
const getName2 = () => {
  return this.firstName + " " + this.lastName; //there is no this
};

const person = {
  firstName: "Pogi",
  lastName: "Tangkad",
  getName: getName,
  getName2: getName2, //just need this one to demonstrate it won't work
};

const person2 = {
  firstName: "Joe",
  lastName: "Volcano",
  getName: getName,
};

const personName = person.getName();
console.log(personName);
const personName2 = person2.getName();
console.log(personName2);
console.log(person.getName2()); //local call on global arrow function
