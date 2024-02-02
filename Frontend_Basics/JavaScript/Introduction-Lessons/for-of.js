/* Author: Pogi Tangkad
   JavaScript file for for-of.html
*/

console.log("JavaScript For Of");

let displayText = document.getElementById("for-ofDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, For Of!<br>";

/*
for (const val of values) {}
seems like Python's for val in values:

for (const [i, val] of values.entries()) {}
seems like Python's for i, val in enumerate(values):
*/

const strs = ["one", "two", "three", "four"];

console.log(strs.entries());

for (const [i, str] of strs.entries()) {
  console.log(i, str);
}

const [str1, str2, str3, str4] = strs;
console.log(str1, str2, str3, str4);

const word = "Hello, World!";
for (const char of word) {
  console.log(char);
  displayText.innerHTML += char;
  if (char === " ") {
    displayText.innerHTML += "<br>";
  }
}

// looping matrices

const matrix = [];

for (let i = 0; i < 3; i++) {
  const nums = [];
  for (let j = i * 3; j < i * 3 + 3; j++) {
    nums.push(j + 1);
  }
  matrix.push(nums);
}
/*
when i = 0, j will be 0, 1, 2
when i = 1, j will be 3, 4, 5
when i = 2, j will be 6, 7, 8
*/

console.table(matrix);
displayText.innerHTML += "<br>" + matrix;

const matrix2 = [];

for (let a = 0; a < 2; a++) {
  const nums2a = [];
  for (let b = 0; b < 3; b++) {
    const nums2b = [];
    for (let c = a * 6 + b * 2; c < a * 6 + b * 2 + 2; c++) {
      nums2b.push(c + 1);
    }
    nums2a.push(nums2b);
  }
  matrix2.push(nums2a);
}
/*
when a = 0 and b = 0, c = 0, 1
[
   [
      [1, 2]
   ]
]      
when a = 0 and b = 1, c = 2, 3
[
   [
      [1, 2],[3, 4]
   ]
]
when a = 0 and b = 2, c = 4, 5
[
   [
      [1, 2],[3, 4],[5, 6]
   ]
]
when a = 1 and b = 0, c = 6, 7
[
   [
      [1, 2],[3, 4],[5, 6]
   ],
   [
      [7, 8]
   ]
]
when a = 1 and b = 1, c = 8, 9
[
   [
      [1, 2],[3, 4],[5, 6]
   ],
   [
      [7, 8], [9, 10]
   ]
]
when a = 1 and b = 2, c = 10, 11
[
   [
      [1, 2],[3, 4],[5, 6]
   ],
   [
      [7, 8], [9, 10], [11, 12]
   ]
]

*/

console.table(matrix2);
displayText.innerHTML += "<br>" + matrix2;
