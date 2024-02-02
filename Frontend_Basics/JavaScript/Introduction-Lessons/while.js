/* Author: Pogi Tangkad
   JavaScript file for while.html
*/

console.log("JavaScript While");

let displayText = document.getElementById("whileDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, While!<br>";

let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}

let number = Number(prompt("Enter a number between 1 and 10"));

while (!(number >= 1 && number <= 10)) {
  number = Number(prompt("Enter a number between 1 and 10"));
}

displayText.innerHTML += number + "<br>";

let number2;
do {
  number2 = Number(prompt("Enter a number between 1 and 10"));
} while (!(number2 >= 1 && number2 <= 10));
displayText.innerHTML += number2 + "<br>";

while (true) {
  let number3 = Number(prompt("Enter a number between 1 and 10"));
  if (number3 >= 1 && number3 <= 10) break;
} // works and breaks out of loop,
// but number3 does not exit outside of loop

let number4;
while (true) {
  number4 = Number(prompt("Enter a number between 1 and 10"));
  if (number4 >= 1 && number4 <= 10) break;
}

displayText.innerHTML += number4 + "<br>";
