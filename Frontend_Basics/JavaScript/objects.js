/* Author: Pogi Tangkad
   JavaScript file for objects.html
*/

console.log("JavaScript Objects");

let displayText = document.getElementById("objectsDisplay");
displayText.style = "color: blue";
displayText.innerHTML = "Hello, Objects!<br>";

//JSON - JavaScript Object Notation

const obj = {
  name1: "Pogi",
};
console.log(typeof obj, " ", obj, " ", obj.name1, " ", obj["name1"]);
obj.name1 = "Kevin";
console.log(obj);

const person = {
  name: "Pogi",
  children: [{ name: "Princessa" }, { name: "Piyojai" }, { name: "Butterfly" }],
};

console.log(person);
console.log(person.name);
console.log(person.children);
console.log(person.children[1]);
console.log(person.children[0].name);

console.log("name" in person); //only works for objects

for (const property in person) {
  console.log(property);
  console.log(person[property]);
}

for (const [property, value] of Object.entries(person)) {
  console.log(property, value);
}
for (const value of Object.values(person)) {
  console.log(value);
}
for (const property of Object.keys(person)) {
  console.log(property);
}

const p1 = person; // just a different alias
const p2 = person; // or pointer to the same object

delete p1.name; //affects all, there is only one person

console.log(person, p1, p2);

const obj1 = {
  name: "Kevin",
  nums: [1, 2, 3],
};
const obj2 = { ...obj1, age: 44 }; //... spread operator
obj2.name = "Pogi";

console.log(obj1, obj2);
obj2.nums[1] = 299;
console.log(obj1, obj2);
