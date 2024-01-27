/* Author: Pogi Tangkad
   JavaScript file for error-handling.html
*/

console.log("JavaScript Error Handling");

let displayText = document.getElementById("errorHandlingDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Error Handling!<br>";

const x = 2;

try {
  x.toUpperCase();
  console.log("skipped because of error");
} catch (err) {
  console.log(err.message, "--", err.name);
  console.log("recovery");
} finally {
  console.log("finally here"); //runs no matter what
}
console.log("hello"); //prevous error prevents this from running

try {
  console.log("try");
  throw { name: "CustomObjectError", message: "forced error throw" };
} catch (err) {
  console.log(err.message, "--", err.name);
} finally {
  console.log("finally");
}

try {
  console.log("try");
  throw Error("built-in error format");
} catch (err) {
  console.log(err.message, "--", err.name);
} finally {
  console.log("finally");
}
