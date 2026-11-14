let a = '3';
let b = a as unknown as number;
console.log('b ',typeof b);

type Num = 10;
let data :Num = 10;
console.log('data ',data);

//data = 100;
type Status = "pending" | "completed"|"rejected";
let s:Status = "pending";