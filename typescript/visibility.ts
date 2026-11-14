class Greeter {
  greet() {
    console.log("hi!");
  }
  protected getName() {
    return "hi";
  }
}
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet();
g.howdy();
//console.log('g.getName() ',g.getName());

