/* Author: Pogi Tangkad
   JavaScript file for practice1.html
*/

console.log("JavaScript Practice1");
const title = "Hello, Practice1!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("practice1Display");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

function userSubmit() {
  userNum = document.getElementById("userNum").value;
  document.getElementById("userNum").value = null;
  document.getElementById("answer").innerHTML = oddOrEven(userNum);
}
