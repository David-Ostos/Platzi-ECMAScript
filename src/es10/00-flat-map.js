//flat
const array = [1,1,2,3,4 ,[1,3,4,[1,2,4]]];
const newArray = array.flat(2);


console.log(array[5][3]);
console.log(newArray);

console.log(newArray[10]);

// flatmap
const array2 = [1,2,3,4];

console.log(array2);
console.log(array2.flatMap(v => [v,v * 2]));