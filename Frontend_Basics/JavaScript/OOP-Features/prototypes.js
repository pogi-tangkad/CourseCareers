/*
Every single object has a "Prototype"
if the object does not have a property or method defined,
it goes down the prototype chain to find the property or method. 
if no "prototype" in the chain contains the property or method,
then null is returned.
*/

const obj = {
  name: "Pogi",
  sayHi: function () {
    console.log("hi");
  },
  toString() {
    return this.name;
  },
};

console.log(obj.toString());
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

// Build and use Protoypes

const personPrototype = {
  greet() {
    console.log("Hello, " + this.name + "!");
  },
};

const pogi = Object.create(personPrototype);
const maganda = Object.create(personPrototype);
pogi.name = "Pogi";
maganda.name = "Maganda";
pogi.greet();
maganda.greet();
console.log(pogi);
console.log(maganda);

const proto = Object.getPrototypeOf(pogi);
const proto2 = Object.getPrototypeOf(proto);

console.log("Proto of pogi: " + Object.getPrototypeOf(pogi));
console.log("Proto of proto: " + Object.getPrototypeOf(proto));
console.log("Proto of proto2: " + Object.getPrototypeOf(proto2));
