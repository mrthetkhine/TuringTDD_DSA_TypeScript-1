let arr = [1,2,3,4];
console.log('arr ',arr[0]);
//arr[0]= "hello";

let data:any;
data = {};
console.log('data ',data);
data = [10];
console.log('data ',data);
data = false;
console.log('data ',data);

function greet(message:string)
{
    console.log('message ',message);
}
greet('hi');

let config : string| number;
config = 10;
config = "Hello";
console.log('Config ',config.toLowerCase()  );