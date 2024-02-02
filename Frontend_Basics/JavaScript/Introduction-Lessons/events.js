/* Author: Pogi Tangkad
   JavaScript file for events.html
*/

console.log("JavaScript Events");

let displayText = document.getElementById("eventsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Events!<br>";

function enterUsername(e) {
  //const username = document.getElementById("username").value;
  //alert("You entered: " + username);
  //document.getElementById("eventsDisplay").innerHTML += username;
  alert(e.value);
  e.value = "";
}

const person = {
  name: "Pogi",
  lastname: "Tangkad",
  getName: function () {
    console.log(this.name + " " + this.lastname);
  },
};

person.getName();

function test() {
  console.log("test");
}

const v = test; //alias the function to another name
v();

function test1() {
  console.log(this);
}
test1();
