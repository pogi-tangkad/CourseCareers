/* Author: Pogi Tangkad
   JavaScript file for array-methods.html
*/

console.log("JavaScript Array Methods");

let displayText = document.getElementById("arrayMethodsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Array Methods!<br>";

/*
modifying:
pop = remove last item
push = add item at end
shift = remove first item
unshift = add item at beginning
sort = sort in ascending ascii value order
sort((a, b) => a - b) = sort in correct value order
splice(index, # of items) = remove items(s) starting at index

non-modifying:
concat(second array) = joins arrays but doesn't modify them
join(string) = separate the items with a string
slice(start, end) = a subset of the array(typical end but not include)

*/
const arr = [1, 2, 3];

const stringArr = arr.toString();

console.log(arr);
console.log(stringArr);

const removed = arr.shift();
console.log(removed);
console.log(arr);

arr.unshift(-1);

console.log(arr);

arr2 = [45, 12, 8, -4, 99, 15];
arr2.sort();
console.log(arr2);

arr2.sort((a, b) => a - b);
console.log(arr2);

console.log(arr.concat(arr2));
const arr3 = arr.concat(arr2);
console.log(arr3, arr, arr2);

const spliced1 = arr3.splice(4, 2);
console.log(arr3, spliced1);

const spliced2 = arr3.splice(4, -2); //does not remove leftward
console.log(arr3, spliced2);

const strSep = arr3.join(" | ");
console.log(arr3, strSep);

const indArr3 = arr3.slice(2, 5); //indexes 2, 3, 4
console.log(indArr3);
