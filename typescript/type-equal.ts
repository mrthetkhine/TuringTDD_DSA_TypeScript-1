class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
let p2 :Point2 = {
  x:10,
  y:20
}
let p1:Point1 = p2;
console.log('P1 ',p1);

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
  constructor(name: string, age: number,salary:number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}
let emp:Employee = new Employee("John", 30, 50000);
let per:Person;
per =emp;
console.log('per ',per);