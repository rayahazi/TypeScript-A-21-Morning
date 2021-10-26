// 1. Empty arrays:

let arr1:number[] = [];
let arr2:Array<number> = []; // <> - are used for generics. 
let arr3:number[] = new Array<number>(); 
let arr4:Array<number> = new Array<number>(); 

// 2. array with initialzied size:
let arr5:number[] = new Array<number>(4); 
let arr6:Array<number> = new Array<number>(2); 

console.log(arr1); // arr1, arr2, arr3, arr4 = []
console.log(arr5); // [ <4 empty items> ]
console.log(arr6); // [ <2 empty items> ]

// The array arr5 will look like this: [undefined, undefined, undefined, undefined]
console.log(arr5[0]); // undefined

// 3. array with initialzied variables:
let arr7:number[] = [1, 2, 3];
let arr8:Array<number> = [1, 2, 3]; // <> - are used for generics. 
let arr9:number[] = new Array<number>(1, 2, 3); 
let arr10:Array<number> = new Array<number>(1, 2, 3); 

// 4. Access data in the array:
let fruits:string[] = [];

console.log(fruits.length); // 0

fruits[0] = 'Apple';
fruits[1] = 'Banana';
fruits[2] = 'Peach';

console.log(fruits.length); // 3
console.log(fruits); // [ 'Apple', 'Banana', 'Peach' ]
console.log(fruits[2]); // Peach

console.table(fruits);
/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'Apple'  │
│    1    │ 'Banana' │
│    2    │ 'Peach'  │
└─────────┴──────────┘
*/

console.table(fruits[2]); // Peach




