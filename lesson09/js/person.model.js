// ES5
function Person(name, surname, age) {
  this.age = age;
  this.name = name;
  this.surname = surname;
  this.originalName = this.name + ' ' + this.surname;
  this.fullName = function() {
    return this.name + ' ' + this.surname;
  }
}

Person.prototype.getPerson = function() {
   return 'Person: ' +  this.fullName() + ', age: ' + this.age;
}

// ES6
class Person2 {
  constructor(name, surname, age) {
    this.age = age;
    this.name = name;
    this.surname = surname;
    this.originalName = `${this.name} ${this.surname}`;
    this.fullName = () => {
      return `${this.name} ${this.surname}`;
    }
  }

  getPerson() {
    return `Person: ${this.fullName()}, age: ${this.age}`;
  }
}
