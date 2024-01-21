/* Author: Pogi Tangkad
   JavaScript file for comparison.html
*/

console.log("JavaScript Comparison Operators");

/*
==      equal to
===     strict equal to * use more often than ==
!=      not equal to
!==     strict not equal to
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to
*/

const val1 = 5 == 5;
const val2 = 5 == 6;
console.log(val1, val2);

const x = 5 == "5";
const y = 5 === "5";
console.log("x: ", x, " y: ", y);

const val3 = 0 == false;
const val5 = 0 === false;
const val4 = 1 == true;
console.log(val3, val4, val5);

const stringVal1 = "hello" == "hello ";
const stringVal2 = "hello" == "hEllo";
console.log(stringVal1, stringVal2);

const m = undefined !== null;
const n = undefined != null;
console.log(m, n);

const val6 = -3 < 3;
const val7 = -5 >= 98;
console.log(val6, val7);

const char1 = "e" > "c";
const char2 = "J" > "w";
const char3 = "b" > "R";
console.log(char1, char2, char3);

const string1 = "hello" > "Hello";
const string2 = "helLo" > "hello";
console.log(string1, string2);

const str1 = "hello";
console.log(str1.charCodeAt(2));
console.log(
  "A".charCodeAt(),
  "Z".charCodeAt(),
  "a".charCodeAt(),
  "z".charCodeAt()
);

const val8 = "10" > "2"; // the ascii of "1" compared to ascii of "2"
console.log(val8);
