interface Human{
    name: string;
    age :number;   
}
interface Human{
    address:string;
}
let h1:Human = {
    name: "Jhon",
    age: 34,
    address: "123 Main St"
}

console.log('h1 ',h1);
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
let bear: Bear = {
    name: "Winnie",
    honey: true
};
console.log('bear ',bear);

type Animal2 = {
  name: string;
}

type Bear2 = Animal2 & { 
  honey: boolean;
}

const bear2:Bear2 ={
    name: "Poosh",
    honey: true
};
bear.name;
bear.honey;