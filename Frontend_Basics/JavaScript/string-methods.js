/* Author: Pogi Tangkad
   JavaScript file for string-methods.html
*/

console.log("JavaScript String Methods");

let displayText = document.getElementById("string-methodsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, String Methods!<br>";

const str1 = "Hello, World!";
const str2 = str1.slice(5);
console.log(str1, " | ", str2);

const str3 = str1.replace("l", "hi");
const str4 = str1.replace("Hello", "Goodbye");

console.log(str3, " | ", str4);

const str5 = str1.replaceAll("l", "dog");
console.log(str5);

const str6 = str1.toUpperCase();
const str7 = str1.toLowerCase();
console.log(str6, " | ", str7);

const str9 = "   lots of white space     ";
console.log(str9, " | ", str9.trim());

console.log(str1.split(" "));
