/* Author: Pogi Tangkad
   JavaScript file for logical.html
*/

console.log("JavaScript Logical Operators");

/*
&&      AND
||      OR
!       NOT

the precedence for these operators is:
! && ||

*/

const a = 5 && "5";
console.log(a);

const b = true && true;
const c = true && false;
const d = true || true;
const e = true || false;
const f = false || false;
const g = false && false;

console.log(b, c, d, e, f, g);

const tnt = 1 && 1;
const tot = 1 || 1;
const tnf = 1 && 0;
const tof = 1 || 0;
const fnf = 0 && 0;
const fof = 0 || 0;
console.log(
  " 1 && 1: ",
  tnt,
  "\n",
  "1 || 1: ",
  tot,
  "\n",
  "1 && 0: ",
  tnf,
  "\n",
  "1 || 0: ",
  tof,
  "\n",
  "0 && 0: ",
  fnf,
  "\n",
  "0 || 0: ",
  fof,
  "\n"
);

const x = 5 > 4;
const y = !(5 > 4);
console.log(x, y);

const m = 6 + 2 < 9 && -9 + (27 % 3) == 2;
const n = 6 + 2 < 9;
console.log(m, n);

const example = !((5 % 2 == 1 && true == 1 && undefined != null) || 5 - 2 == 1);
console.log(example);
