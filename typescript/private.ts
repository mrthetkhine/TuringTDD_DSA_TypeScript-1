class Base {
  private x = 10;

  display()
  {
    console.log('It"s x',this.x);
  }
}
const b = new Base();
b.display();
//console.log('b.x ',b.x);
let data = b as any;
console.log('b.x ',data.x);