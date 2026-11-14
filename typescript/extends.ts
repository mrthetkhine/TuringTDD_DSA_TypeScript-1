class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
let dog = new Dog();
dog.move();
dog.woof(3);

class Base {
  greet() {
    console.log("Hello, world! in parent");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
let derived = new Derived();
derived.greet();
derived.greet("world");