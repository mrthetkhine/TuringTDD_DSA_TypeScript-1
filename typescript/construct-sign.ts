class Human
{
    constructor(public name:string){
        console.log('Human constructor ',this.name);
    }
}
class Animal
{
    constructor(public name:string){
        console.log('Animal constructor ',this.name);
    }
}
type Cons = {
  new (s: string): Object;
};
let ctor:Cons = Human;
let obj = new ctor("John");
console.log('obj ',obj);

ctor = Animal;
let obj2 = new ctor("Cat");
console.log('obj2 ',obj2);