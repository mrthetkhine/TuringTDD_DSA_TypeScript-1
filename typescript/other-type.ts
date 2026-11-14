function getNothing():void
{
    console.log('getNothing');
    return;
}
let data:object ={};
data = {
    name: "Jhon",
    age:34
}
console.log('data ',(data as any ).name);
data = ()=>console.log('Fun');
//data();

function fail(msg: string): never {
  throw new Error(msg);
}

try
{
    fail('Error');
}
catch(msg)
{
    console.log('msg ',msg);
}
