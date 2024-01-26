/* Author: Pogi Tangkad
   JavaScript file for strings.html
*/

console.log("JavaScript Strings");

let displayText = document.getElementById("stringsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Strings!<br>";

// strings are immutable

console.log('"Inside qoute don\'t have to be in a quote"');
console.log("Inside apostrophe don't have to be in quotes");
console.log("internal \\ backslash");

console.log("go to a \nnew line");

console.log("hello, \t\t\tworld.");

const str = `hello, ${5 + 8} world`;
console.log(str);

const str2 = `hello, ${str} world`;
console.log(str2);

console.log(str[3]);
console.log(str.length);
