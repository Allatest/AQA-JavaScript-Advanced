// Task 5
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class PeopleRegistry {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  removePerson(firstName, lastName) {
    this.people = this.people.filter(
      (person) => person.firstName !== firstName || person.lastName !== lastName
    );
  }

  findPerson(firstName, lastName) {
    return this.people.find(
      (person) => person.firstName === firstName && person.lastName === lastName
    );
  }

  listPeople() {
    this.people.forEach((person) => {
      console.log(
        `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`
      );
    });
  }
}

const person1 = new Person("John", "Ivan", 25);
const person2 = new Person("Ann", "Black", 35);

const registry = new PeopleRegistry();

registry.addPerson(person1);
registry.addPerson(person2);

console.log();
registry.listPeople();

const foundPerson = registry.findPerson("John", "Ivan");
if (foundPerson) {
  console.log(
    `Found: ${foundPerson.firstName} ${foundPerson.lastName}, Age: ${foundPerson.age}`
  );
} else {
  console.log("Person not found.");
}

registry.removePerson("John", "Ivan");
console.log("People in the registry after removal:");
registry.listPeople();
