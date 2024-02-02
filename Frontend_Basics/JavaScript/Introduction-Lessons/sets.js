/* Author: Pogi Tangkad
   JavaScript file for sets.html
*/

console.log("JavaScript Sets");

let displayText = document.getElementById("setsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Sets!<br>";

/*
sets maintain order and discard duplicates
sets do not index
*/

const s = new Set([1, 3, 4, 9, 3, 1, 9]);
s.add(-1);
s.delete(4);
console.log(s, s.size);

console.log(s.has(9));
console.log(s.has(4));

const arr = [1, 2, 3, 4, 5, 2, 4, 3, 1, 8, 6, 7, 3, 9];

for (const [idx, value] of arr.entries()) {
  for (const value2 of arr.slice(idx + 1)) {
    if (value === value2) {
      console.log("Found duplicate of ", value);
      break;
    }
  }
}
console.log("set fill from array");
const nums = new Set();
for (const val of arr) {
  if (nums.has(val)) {
    console.log("Found duplicate of ", val);
  }
  nums.add(val);
}
console.log(nums);

console.log(new Set(arr));

// convert non-unique array to set then back to array
console.log(Array.from(new Set(arr)));
