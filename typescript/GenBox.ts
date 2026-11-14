type Box<T>={
    value:T
}
let data:Box<number>={
    value:10
}
console.log('data ',data.value.toFixed());

let data2:Box<string>={
    value:"Hello"
}
console.log('data2 ',data2.value.toLowerCase());

function firstElement(arr:any[])
{
    return arr[0];
}
//console.log('firsElement ',firstElement(['1',2,3,4]).toFixed());
function firstElement2<T>(arr:T[])
{
    return arr[0];
}
console.log('firsElement ',firstElement2(['A','2']).toLowerCase());