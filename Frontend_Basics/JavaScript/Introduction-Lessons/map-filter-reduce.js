/* Author: Pogi Tangkad
   JavaScript file for map-filter-reduce.html
*/

console.log("JavaScript Map, Filter, Reduce");
const title = "Hello, Map Filter Reduce!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("mapFilterReduceDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

//map
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = arr.map((x) => x ** 2);
console.log(arr, "--", squares);

function map1(arr, func) {
  const newArr = [];
  for (const value of arr) {
    newArr.push(func(value));
  }
  return newArr;
}

console.log(
  "my map: ",
  map1(arr, (x) => x ** 3)
);

//filter
const filterArr = arr.filter((value) => value % 2 == 0);
console.log(filterArr);

function filter1(arr, func) {
  const newArr = [];
  for (const value of arr) {
    if (func(value)) {
      newArr.push(value);
    }
  }
  return newArr;
}

console.log(
  "my filter: ",
  filter1(arr, (x) => x % 2 == 0)
);

//reduce
const sum = arr.reduce((prev, current) => prev + current);
console.log(sum);

function reduce1(arr, func) {
  let currentResult = 0;

  for (const num of arr) {
    currentResult = func(currentResult, num);
  }
  return currentResult;
}

console.log(reduce1(arr, (prev, next) => prev - next));
