function longest<T extends { length: number }>(a: T, b: T): T {
    return a.length > b.length ? a : b;
}

console.log('longest ',longest("hi","World"));
console.log('longest ',longest([1,2],[1,2,3,4,5]));

//console.log('longest ',longest(10,3));