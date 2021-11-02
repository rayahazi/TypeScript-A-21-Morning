// value types - number, string, boolean
let x1:number = 4, x2 = x1;
console.log(x1 == x2); // true 

let arr1:number[]=[1,2,3], arr2:number[]=[1,2,3];
// Here we check for arr1 & arr2: 
// arrays hold a value = the address of the first element in the array
console.log(arr1 == arr2); // false

// Here we check the `value` inside the first address
console.log(arr1[0] == arr2[0]); // true
