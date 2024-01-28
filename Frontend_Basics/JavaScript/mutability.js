/* Author: Pogi Tangkad
   JavaScript file for mutability.html
*/

console.log("JavaScript Mutability");
const title = "Hello, Mutability!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("mutabilityDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

/*
immutable: once declared, cannot be changed or referenced
true;
13;
("str");
undefined;
null;
*/

let x = 10;
const y = x; //copy of 10
x = 20; //no link between x and y
console.log(x, y);

/*
mutable: can be changed and referenced
array

*/

let n = [1, 2, 3, 4, 5];
let m = n; //not a copy, but a reference to n
n[0] = 88; //change value in referenced array
console.log(n, m); //m also referencing the same changed array

n = [4, 7, 2, 1]; //reference for n points to new array
console.log(n, m); //m still points to old referenced array

let o = [...m]; //makes copy of array values referenced by m
console.log(n, m, o);

let a = [[1], [2], [3], [4]];
let b = [...a];
displayText.innerHTML += a + "--" + b + "<br>";

b[0] = [100]; //internal array is mutable and doesn't alter a
displayText.innerHTML += a + "--" + b + "<br>";

b[3][0] = 88; //number inside is immutable and affects value in a
displayText.innerHTML += a + "--" + b + "<br>";

//ref -> [ref -> [1],ref -> [2],ref -> [3],ref -> [4]]

function modifyArray(k) {
  k[0] = 100;
}

const arr = [1, 2, 3, 4];
console.log(arr);
modifyArray(arr);
console.log(arr);
