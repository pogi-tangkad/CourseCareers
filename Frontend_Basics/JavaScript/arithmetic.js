/* Author: Pogi Tangkad
   JavaScript file for arithmetic.html
*/
console.log("JavaScript Arithmetic Operators");

/*
+   addition
-   subtraction
*   multiplication
/   division
**  exponentiation
%   modulus
++  increment
--  decrement
*/

const x = 10;
const y = 17;

const z = x + y;
console.log("x: ", x, " y: ", y, " | x + y = z: ", z);

const l = 2;
const m = 3;

const n = ((l + m) / l) * m;
console.log("l: ", l, " m: ", m, " | (l + m) / l * m = n: ", n);

const a = y ** l;
console.log("y: ", y, " l: ", l, " | y ** l = a: ", a);

const b = x / m;
const c = x % m;
const d = y % m;
console.log("x: ", x, " m: ", m, " | x / m = b: ", b);
console.log("x: ", x, " m: ", m, " | x % m = c: ", c);
console.log("y: ", y, " m: ", m, " | y % m = d: ", d);

let i = 5;
console.log("i: ", i);
i++;
console.log("i++: ", i);
