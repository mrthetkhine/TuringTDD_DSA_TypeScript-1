const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
let obj = new someClass<string>("Hello");
console.log('Obj ',obj);