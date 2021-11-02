// value types - number, string, boolean

let x:number = 5, y:number;
y = x;
console.log(`x = ${x}, y = ${y}`); // 5, 5

x = 10;
console.log(`x = ${x}, y = ${y}`); // 10, 5

// reference types - array, object

let arr:number[] = [1, 2, 3], copy:number[];
copy = arr; // copy = -> address of arr[0]
console.log(`arr = ${arr}, copy = ${copy}`); // [1, 2, 3],[1, 2, 3]
arr[1] = 100;
console.log(`arr = ${arr}, copy = ${copy}`); // [1, 100, 3],[1, 100, 3]

