function sum(a:number,...args:number[])
{
    console.log('Args ',args);
    let total = 0;
    for(const item of args)
    {
        total += item;
    }
    return total;
}
console.log('sum ',sum(1,2));
console.log('sum ',sum(1,2,3,4));

function showCoordinate(data:{
    x:number,
    y:number
})
{
    console.log('data.x ',data.x);
    console.log('data.y ',data.y);
}
showCoordinate({x:10,y:20});

function showCoordinate2({
    x,
    y
}:{
    x:number,
    y:number
})
{
    //x= data.x;
    //y = data.y
    console.log('data.x ',x);
    console.log('data.y ',y);
}
showCoordinate2({x:10,y:20});