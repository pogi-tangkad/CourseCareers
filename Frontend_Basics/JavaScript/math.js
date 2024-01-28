/* Author: Pogi Tangkad
   JavaScript file for math.html
*/

console.log("JavaScript Math");
const title = "Hello, Math!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("mathDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

const num = 2.489;
const roundedNum = Math.round(num);
console.log(roundedNum);

console.log(Math.round(num * 10) / 10);

const num2 = 345.11;
console.log(Math.round(num2 / 10) * 10);

console.log(Math.floor(num));
console.log(Math.ceil(num));

const x = 10;
const y = 20;
console.log(Math.max(x, y, -3, 44, 9, 3));

const arr = [8, 12, 67, 21, 3, 49];
console.log(Math.min(...arr)); //use spread operator to unpack array

console.log(Math.abs(-8));
console.log(Math.log2(128));

const z = Infinity; //not real, just always returns larger than any other number
