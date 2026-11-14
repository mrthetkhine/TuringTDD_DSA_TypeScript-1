let arr = [1,2,3];
arr.push(4);
//arr.push('100');
console.log('arr ',arr);

let arr2:number[] = [1,2,3,4];
arr2.push(5);
//arr2.push('100');
console.log('arr2 ',arr2);

let arr3:Array<number> =[1,2,3,4];
console.log('arr3 ',arr3);

let arr4:ReadonlyArray<number> = [1,2,3,4];
//arr4.push(5);
//arr4[2]=10;
console.log('arr4 ',arr4);