class Dog {
  #barkAmount = 10;
  personality = "happy";
 
  constructor() {}
  show()
  {
    console.log(`barkAmount ${this.#barkAmount} personality ${this.personality}`);
  }
}
let dog = new Dog();
dog.show();
let data = dog as any;
console.log('dog ',data['#barkAmount']);