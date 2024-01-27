/* Author: Pogi Tangkad
   JavaScript file for functions.html
*/

console.log("JavaScript Functions");

let displayText = document.getElementById("functionsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Functions!<br>";

// reusable block of code to use multiple times throught code
// can be called before it is built

function add(x, y) {
  console.log(x + y);
}

const a = 4;
const b = 9;
const c = 33;

add(a, b);
add(c, a);
add(c, b);
add(77, 393923);

function math(a1, a2, num = 1) {
  return a1 * a2 * num;
}

console.log(math(2, 14));
const num1 = math(-23, 2, 8);
console.log(num1);
math(1, 1, 4);

function math2(a1, a2, num = 1) {
  return [a1 ** num, a2 ** num];
}

console.log(math2(2, 3, 2));

const [result1, result2] = math2(4, 5, 3);
console.log(result1, result2);

function removeAllChars(arrayOfStrings = [], charactersToRemove = []) {
  if (arrayOfStrings.length === 0) {
    return "No string array to change.";
  }
  if (charactersToRemove.length === 0) {
    return "No characters provided for removal.";
  }
  const newArray = [];
  for (const str of arrayOfStrings) {
    let newStr = "";
    for (const char of str) {
      if (charactersToRemove.includes(char)) {
        continue;
      }
      newStr += char;
    }
    newArray.push(newStr);
  }
  return newArray;
}

strArray = ["hello", "world", "123", "taco", "monkey", "squirrel"];
charArray = ["a", "3", "r", "o", "l"];
console.log(removeAllChars(strArray, charArray));
console.log(removeAllChars(strArray));
console.log(removeAllChars());
