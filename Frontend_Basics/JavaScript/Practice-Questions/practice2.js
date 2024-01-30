/* Author: Pogi Tangkad
   JavaScript file for practice2.html
*/

console.log("JavaScript Practice2");
const title = "Hello, Practice2!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("practice2Display");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

let clearInput = false;

function findLargest(arr1) {
  const largestNum = arr1.sort((a, b) => b - a);
  console.log(largestNum);
  return largestNum[0];
}

function userSubmit() {
  const num1 = document.getElementById("userNum1").value;
  const num2 = document.getElementById("userNum2").value;
  const num3 = document.getElementById("userNum3").value;
  const result = findLargest([num1, num2, num3]);
  document.getElementById("answer").innerHTML = result;
  clearInput = true;
}

function clearEntries() {
  if (clearInput) {
    document.getElementById("userNum1").value = null;
    document.getElementById("userNum2").value = null;
    document.getElementById("userNum3").value = null;
    clearInput = false;
  }
}

function clearAnswer() {
  if (!clearInput) {
    document.getElementById("answer").innerHTML = "";
  }
}
