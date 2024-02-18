class Person {
  //Parent or Super class
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return this.name + ", age " + this.age + ".";
  }
}

class Teacher extends Person {
  salary;

  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  greet() {
    return "I am the teacher " + super.greet();
  }
}

class Student extends Person {
  //Derived or Child class
  group;

  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }
}

const s1 = new Student("Pogi", 43, "Modesty");

const t1 = new Teacher("Maganda", 46, 88000);
console.log(s1.greet());
console.log(t1.greet());
