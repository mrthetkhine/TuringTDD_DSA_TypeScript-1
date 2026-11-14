abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
class Derived extends Base
{
  getName(): string {
    return "Derived";
  }
}
let d = new Derived();
d.printName();