class Person {
  name;
  age;

  constructor(name, age) {
    //function that will run everytime an instance of this class is instantiated
    this.name = name;
    this.age = age;
  }

  sayHi(shouldSayBye) {
    console.log(
      `Hello. My name is ${this.name} and I am ${this.age} years old.`
    );
    if (shouldSayBye) {
      console.log("Bye");
    }
  }
}

const person = new Person("Pogi", 44);
const person2 = new Person("Joe", 33);
console.log(person, person2);

person.sayHi(false);
person2.sayHi(true);
