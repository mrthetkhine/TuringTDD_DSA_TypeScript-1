let obj ={
    name: "Jhon",
    age: 34
}
/*
let objname = obj.name;
let age = obj.age;
*/
let {name:objname,age} = obj;
console.log('objname ',objname, ' age ',age)

let arr= [10,20,30,40];

/*
let x = arr[0];
let y = arr[1];
let rest = arr.slice(2);
console.log('x ',x,' y ',y,' rest ',rest);
*/
let [x,y,...rest] = arr;
console.log('x ',x,' y ',y,' rest ',rest);