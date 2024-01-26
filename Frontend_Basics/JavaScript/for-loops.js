/* Author: Pogi Tangkad
   JavaScript file for for-loops.html
*/

console.log("JavaScript For Loops");

let displayText = document.getElementById("for-loopsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, For Loops!<br>";

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i >= 7) {
    break;
  }
}

for (let j = 100; j >= 0; j -= 10) {
  console.log(j);
}

const divBy2 = [];
for (let k = 0; k <= 100; k++) {
  if (k % 2 == 0 && k != 0) divBy2.push(k);
  if (divBy2.length >= 20) {
    break;
  }
}
console.log(divBy2);

const divBy2Not3 = [];
for (let m = 0; m <= 100; m++) {
  if (m % 3 === 0) continue;
  if (m % 2 === 0 && m != 0) divBy2Not3.push(m);
}
console.log(divBy2Not3);

const numberElements = Number(prompt("Enter a number between 1 and 10."));
if (numberElements >= 1 && numberElements <= 10) {
  const ulist = document.getElementById("ulist");
  for (let n = 0; n < numberElements; n++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(n.toString()));
    ulist.appendChild(li);
  }
} else {
  alert("That is not a valid input");
}

const str0 = prompt("Enter a string of characters: ");
const target = "j";

let check = true;
for (let z = 0; z < str0.length; z++) {
  const char = str0[z];
  if (char === target) {
    alert(`We found the ${target} in ${z + 1} characters.`);
    check = !check;
    break;
  }
}
if (check) alert(`We did not find ${target} in ${str0}`);
