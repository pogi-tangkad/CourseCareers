/* Author: Pogi Tangkad
   JavaScript file for type-conversion.html
*/

console.log("JavaScript Type Conversions");

const x = "5";
const y = 10;
const result1 = x + y;
console.log(result1);
const result2 = Number(x) + y;
console.log(result2);

const a = "hello";
console.log(Number(a));

const b = "33.3333";
console.log(Number(b));
console.log(parseInt(b));
console.log(parseFloat(b));

const c = true; // true = 1, false = 0
const result3 = y + Number(c);
console.log(result3);

const name1 = "pogi";
const age1 = 44;
const sentence =
  "hi. my name is " + name1 + ", and I am " + age1 + " years old.";
console.log(sentence);
const numString = age1 + " " + String(age1) + " " + age1.toString();
console.log(numString);

console.log((2 + 3).toString(), " ", 2 + (3).toString());

const year1 = "1980";
console.log(+year1 + 44); // unary operator uses string as number
