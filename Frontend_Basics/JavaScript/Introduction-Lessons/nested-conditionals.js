/* Author: Pogi Tangkad
   JavaScript file for nested-conditionals.html
*/

console.log("JavaScript Nested Conditionals");

const country = prompt("What country do you live in? ");

if (country.toLowerCase() === "usa" || country.toLowerCase() === "merika") {
  const age = prompt("Enter age: ");
  if (age >= 18) {
    const color = prompt("Please enter you favorite color: ");
    const text = document.getElementById("fave_color");
    text.innerHTML = "My favorite color is " + color + " too!";
    text.style = "color: " + color;
  } else {
    alert(
      "Thanks for participating. We are not interested in any further data."
    );
  }
} else {
  alert("Thanks for participating. We are not interested in any further data.");
}
