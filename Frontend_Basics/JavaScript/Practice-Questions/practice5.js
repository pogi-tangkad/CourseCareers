/* Author: Pogi Tangkad
   JavaScript file for practice5
*/

function mathIsFun(numberString) {
  const arr = numberString.split("|");
  arr.sort((a, b) => Number(b) - Number(a));
  console.log(Number(arr[0]) + Number(arr[1]));
}

mathIsFun("12|13|-4|5");
mathIsFun("-2|-4|-1|-1");
