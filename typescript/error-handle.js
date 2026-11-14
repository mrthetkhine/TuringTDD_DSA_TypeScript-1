function div(a,b)
{
    if(b == 0)
    {
        return [undefined,new Error("Divide by zero")];
    }
    return [a/b,undefined];
}
let [result,err] = div(10,0);
if(err)
{
    console.log('err ',err);
}
else
{
    console.log('result ',result);
}