function toUpper(msg:string):string{
    return msg.toUpperCase();
}
console.log('toUpper ',toUpper("Hello"));

function add(a:number,b:number):number{
    return a+b;
}
function subtract(a:number,b:number):number{
    return a-b;
}

function hello()
{
    console.log('Hello');
}
function hi()
{
    console.log('Hi');
}
function acceptFun(fn:()=>void)
{
    fn();
    console.log('accept Fun ');
}
acceptFun(hi);
acceptFun(hello);

//acceptFun(add);

type ArithFun = (a:number,b:number)=>number;
function acceptArith(fn:ArithFun)
{
    let result = fn(10,20);
    console.log('result ',result);
}
acceptArith(add);
acceptArith(subtract);