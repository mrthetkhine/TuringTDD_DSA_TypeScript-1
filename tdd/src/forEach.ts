export function forEach(items:number[], callback:(item:number)=>void) {
    for (const item of items) {
        callback(item);
    }
}
//forEach([1,2,3],(item)=>console.log('item ',item));

export function forEachEven(items:number[], callback:(item:number)=>void) {
    let evenList = items.filter(x=>x%2==0);
    for (const item of evenList) {
        callback(item);
    }
}
forEachEven([1,2,3,4],(item)=>console.log('item ',item));