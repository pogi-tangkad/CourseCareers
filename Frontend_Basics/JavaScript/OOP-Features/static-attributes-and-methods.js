class Person {
  name;
  static numberOfPeople = 0; //static attribute common across all instances

  constructor(name) {
    this.name = name;
    Person.numberOfPeople++; //"Person" needed because it belongs to the class not the instance
  }

  static getNumberOfPeople() {
    return this.numberOfPeople; //"this" can be used because the method is static
  }
  static removePerson() {
    this.numberOfPeople--;
  }
}

p1 = new Person("Pogi");

console.log(Person.numberOfPeople);

p2 = new Person("Maganda");

console.log(Person.getNumberOfPeople);
