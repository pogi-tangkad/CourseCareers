/* Author: Pogi Tangkad
   JavaScript file for maps.html
*/

console.log("JavaScript Maps");

let displayText = document.getElementById("MapsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Maps!<br>";

/*
only unique keys allowed
maintains order
*/

const m = new Map();

m.set("a", 3);
m.set("b", 31);
m.set("c", 8);
m.set("g", 9);
m.set("a", 4); //stays at beginning even though set again later

console.log(m);
console.log(m.get("c"));
console.log(m.has("g"));
console.log(m.has(8));

m.delete("c");
console.log(m);
console.log(m.size);

const str = "Hello, World. My name is Pogi Tangkad.";
const freq = [];

for (const char of str) {
  let found = false;
  for (const [idx, pair] of freq.entries()) {
    const [key, val] = pair;
    if (key === char) {
      freq[idx] = [char, val + 1];
      found = true;
      break;
    }
  }
  if (!found) freq.push([char, 1]);
}
console.log(freq);

const map1 = new Map();
for (const char of str) {
  if (map1.has(char)) {
    map1.set(char, map1.get(char) + 1);
  } else {
    map1.set(char, 1);
  }
}
console.log(map1);

map1.delete(" ");
console.log(map1);
[(",", ".", "l", "m", "n", "o")].forEach((x) => map1.delete(x));
console.log(map1);
