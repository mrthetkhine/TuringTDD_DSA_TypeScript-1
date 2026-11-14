class MyClass {
  static count = 0;
  id;
  static
  {
    console.log('static block1');
  }
  static{
    console.log('static block2');
  }
  constructor() {
    this.id = MyClass.count++;
  }
  static printX() {
    console.log(MyClass.count);
  }
  show() {
    console.log('id ',this.id);
    MyClass.printX();
  }
}
console.log('MyClass.count ',MyClass.count);
let obj = new MyClass();
obj.show();
//obj.id = "Hello";

let obj2 = new MyClass();
obj2.show();