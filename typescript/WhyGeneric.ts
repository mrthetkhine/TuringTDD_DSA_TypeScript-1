type Box = {
    value:string
}
let data:Box ={
    value: "Hello"
};
console.log('data ',data);
type NumBox = {
    value:number
};
let data2 :NumBox = {
    value: 10
}
type AnyBox = {
    value:any
}
let data3:AnyBox ={
    value: 10
}
console.log('data3 ',data3.value.toLowerCase());