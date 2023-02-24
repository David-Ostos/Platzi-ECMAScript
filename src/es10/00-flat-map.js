//flat
const array = [1,1,2,3,4 ,[1,3,4,[1,2,4]]];

console.log(array);
console.log(array.flat(2));

// flatmap
const array2 = [1,2,3,4];

console.log(array2);
console.log(array2.flatMap(v => [v,v * 2]));