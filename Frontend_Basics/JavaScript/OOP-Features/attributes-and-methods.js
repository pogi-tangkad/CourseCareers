class Teacher {
  name;
  age;
  #salary; //private value: use Setters-n-Getters

  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.#salary = salary;
  }

  setSalary(newSalary) {
    if (newSalary <= 0) {
      throw Error("Invalid salary; must be above 0");
    }
    this.#salary = newSalary;
  }

  getSalary() {
    return this.#salary;
  }
}

const teach1 = new Teacher("Joe", 25, 65000);

console.log(teach1, teach1.getSalary());

teach1.setSalary(73000);

console.log(teach1, teach1.getSalary());
