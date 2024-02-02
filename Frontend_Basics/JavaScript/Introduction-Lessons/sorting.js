/* Author: Pogi Tangkad
   JavaScript file for sorting.html
*/

console.log("JavaScript Sorting");
const title = "Hello, Sorting!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("sortingDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

const num = [1, 4, 8, 32, 68, 1956, 5, 6, 2, 7, 234];
const sortedNums = num.sort();
console.log(sortedNums);

const sortedNums2 = num.sort((a, b) => a - b);
console.log(sortedNums2);

const revSortedNums2 = num.sort((a, b) => b - a);
console.log(revSortedNums2);

const objs1 = [
  { year: 2023, make: "Ford" },
  { year: 2008, make: "Porsche" },
  { year: 2023, make: "Volvo" },
  { year: 2008, make: "Koenigsegg" },
];

const objs2 = [
  { year: 2023, make: "Ford" },
  { year: 2008, make: "Porsche" },
  { year: 2023, make: "Volvo" },
  { year: 2008, make: "Koenigsegg" },
  { year: 2023, make: "Chevy" },
  { year: 2016, make: "BMW" },
  { year: 1996, make: "Nissan" },
  { year: 1996, make: "Audi" },
];

const sortYear = objs1.sort((a, b) => a.year - b.year);
console.log(sortYear);

const sortYearMake = objs2.sort((a, b) => {
  const diffinYear = a.year - b.year;
  if (diffinYear === 0) {
    if (a.make > b.make) {
      return 1;
    } else if (a.make < b.make) {
      return -1;
    } else {
      return 0;
    }
  }
  return diffinYear;
});

console.log(sortYearMake);
