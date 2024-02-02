/* Author: Pogi Tangkad
   JavaScript file for switch-statement.html
*/

console.log("JavaScript Switch Statement");

/*
Switch uses the strict equality operator (===).
For example "10" does not equal 10. Strings, numbers,
etc. need to be converted prior to matching.
*/

const faveColor = prompt("Enter your fave color: ").toLowerCase();
const replyText = document.getElementById("switch-response");
replyText.style = "color: " + faveColor;
let punctuation = ".";
let emphasis = "";
let check = true;

switch (faveColor) {
  case "red":
    emphasis = "always ";
    punctuation = " too!";
    break;
  case "blue":
    emphasis = "sometimes ";
    punctuation = ".";
    break;
  case "green":
    emphasis = "never ";
    punctuation = "! Not ever never ever!";
    break;
  default:
    check = false;
    alert("I don't know that color.");
    location.reload();
}
if (check) {
  replyText.innerHTML =
    "My favorite color is " + emphasis + faveColor + punctuation;
}
