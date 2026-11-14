function add(a:number,b:number)
{
    return a+b;
}
//(a:number,b:number) => number
function greet(msg:string)
{
    console.log('greet ',msg);
}
//(string)=>void
let fun:Function = add;
console.log('add(2,3) ',fun(2,3));

fun = greet;
console.log('greet("Hello") ',fun("Hello"));