interface Pair<T, U> {
    first: T;
    second: U;
}
let pair:Pair<number,string>={
    first:10,
    second:"Hello"
}
console.log('Pair ',pair);

let pair2:Pair<boolean,string>={
    first:true,
    second:"Hello"
}

let tuple:[number,string] = [10,"Hello"];
console.log('Tuple ',tuple[0].toFixed());
console.log('tuple[1] ',tuple[1].toLowerCase());
//console.log('tuple[2] ',tuple[2].toLowerCase());