function greet(msg?:string)
{
    console.log('greet ',msg);
}
greet();
function greet2(msg="Hello")
{
    console.log('greet2 ',msg);
}
greet2();
greet2('hi');