// Default parameters:
function myFunc1(x1:number = 5, x2:number = 7):void{
    console.log(`x1 = ${x1}, x2: ${x2}`);
}

myFunc1(); // 5, 7
myFunc1(8); // 8, 7
myFunc1(8, 8); // 8, 8
myFunc1(undefined, 8); // 5, 8

// Optional parameters - marked as ?
function myFunc2(x1:number = 5, x2?:number):void{
    console.log(`x1 = ${x1}, x2: ${x2}`);
}

myFunc2(); // 5, undefined
myFunc2(45); // 45, undefined
myFunc2(45, 12); // 45, 12

// Use in built-in functions - index is optional parameter.
let ar:number[] = [1,2,3];
ar.forEach((item)=>{});
ar.forEach((item, index)=>{});

