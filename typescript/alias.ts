let obj :{
    name: string;
    age :number;   
} = {
    name: "Jhon",
    age: 34
}
//obj.something ="Hello";
obj.name = "Wick";
obj.age = 12;
console.log('obj ',obj);

type Human ={
    name: string;
    age :number;   
}
let obj2:Human = {
    name: "Jhon",
    age: 34
}
type ID = number | string;
let id:ID = 10;;
id = "Hello";
/*
type Human ={
    address:string;
}
*/