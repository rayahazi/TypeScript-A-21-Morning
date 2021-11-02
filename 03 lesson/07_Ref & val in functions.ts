/*
In functions - parameters pass to the functions:
1. value types: the value outside the function will not change. 
(we send the value)
2. Ref types: the value will change (we send the address)
*/
// We send the value!
function getValue(num:number):void{
    num = 10;
}

let x3:number = 4;
console.log(`Before func: ${x3}`); // 4
getValue(x3);
console.log(`After func: ${x3}`); // 4

// We send the address!
function getRef(num:number[]){
    num[0] = 10;
}

let x4:number[] = [1, 2, 3];
console.log(`Before func: ${x4}`); // [1, 2, 3]
getRef(x4);
console.log(`After func: ${x3}`); // [10, 2, 3]

