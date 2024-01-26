/* Author: Pogi Tangkad
   JavaScript file for arrays.html
*/

console.log("JavaScript Arrays");

let displayText = document.getElementById("arraysDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, World!";

const ARR = [19, 38, "hello"];
/*            ^   ^     ^
              |   |     |
      index   0   1     2
*/

displayText.innerHTML +=
  "<br>array: " +
  ARR +
  ": length: " +
  ARR.length +
  "<br>index 0: " +
  ARR[0] +
  "<br>index 1: " +
  ARR[1] +
  "<br>index 2: " +
  ARR[2] +
  "<br>index 3: " +
  ARR[3];

ARR[1] = 4;
displayText.innerHTML += "<br>change index 1 to the number 4: " + ARR;
ARR[3] = "dog";
displayText.innerHTML += "<br>add dog to end of arrray " + ARR;
ARR[8] = 33;
displayText.innerHTML += "<br>put numner 33 in position 8: " + ARR;
displayText.innerHTML +=
  "<br>notice the added empty pos and length is: " + ARR.length;

const ARR1 = new Array(10);
displayText.innerHTML +=
  "<br>make new empty array with 10 pos: " + ARR1 + ": length: " + ARR1.length;

const ARR2 = [];

const name1 = prompt("Enter your name: ");
const age1 = prompt("Enter your age: ");
const hairColor1 = prompt("Enter your hair color: ");

if (name1 != "") ARR2.push(name1);
if (age1 != "") ARR2.push(age1);
if (hairColor1 != "") ARR2.push(hairColor1);

displayText.innerHTML += "<br><br>values: " + ARR2;

if (hairColor1 != "") {
  var deleteHair = confirm("would you like to delete your hair color ?");
}
if (deleteHair) ARR2.pop();

if (age1 != "") {
  var deleteAge = confirm("would you like to delete your age?");
}
if (deleteAge) ARR2.splice(1, 1);

displayText.innerHTML += "<br><br>new: " + ARR2;

const nestArr1 = [];
const nestArr2 = [1, 2, 3];
const nestArr3 = [3, 4, 5];

nestArr1.push(nestArr2);
nestArr1.push(nestArr3);

console.log(nestArr1, nestArr1[0]), nestArr1[1];
console.log(nestArr1[0][1]);
console.log(nestArr1[1][2]);
