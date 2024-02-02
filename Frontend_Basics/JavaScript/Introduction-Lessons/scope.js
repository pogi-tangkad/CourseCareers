/* Author: Pogi Tangkad
   JavaScript file for scope.html
*/

console.log("JavaScript Scope");
const title = "Hello, Scope!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("scopeDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

//global scope

let x = 2;
function accessX() {
  x = 4;
  function test() {
    console.log(x);
  }
  test();
}
accessX();
//test(); // fails becase test is local to accessX
console.log(x);

function accessY() {
  let y = 2;
  console.log(y);
}

accessY();
//console.log(y); // fails because y is not global

function test1(z) {
  if (z === 3) {
    let val = 5; // let doesn't reach out
  } else if (z === 4) {
    var val = 6; // var does reach out to next higher scope
  } else {
    const val = 0; // const does not reach out
  }
  console.log(val);
}
test1(9);
