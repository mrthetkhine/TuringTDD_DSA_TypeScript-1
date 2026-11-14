class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
let obj =new MyClass();
console.log('getName ',obj.getName());

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}