interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}
 
class Bulldog implements Dog {
  dateOfBirth: any;
  breed: any;

  constructor(dOB:any,breed:any)
  {
    this.dateOfBirth = dOB;
    this.breed = breed;
  }
}
let dog = new Bulldog("01/01/2010","Bulldog");
console.log('dog ',dog);