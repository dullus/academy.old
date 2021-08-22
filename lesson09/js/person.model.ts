// TS
class Person3 {
  public age: number;
  public name: string;
  public surname: string;
  public originalName: string;
  public fullName: () => string;

  constructor(name: string, surname: string, age: number) {
    this.age = age;
    this.name = name;
    this.surname = surname;
    this.originalName = `${this.name} ${this.surname}`;
    this.fullName = () => {
      return `${this.name} ${this.surname}`;
    };
  }

  public getPerson(): string {
    return `Person: ${this.fullName()}, age: ${this.age}`;
  }
}
