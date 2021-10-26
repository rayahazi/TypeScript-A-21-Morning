// In JavaScript we can create multitype arrays: 
let a1 = ['apple', 23, true];

// In typescript we must declare the type
// let a2:number[] = ['apple', 23, true]; -> Error

// Use | (or gate) to add multitypes:
let a2:Array<string | number> = ['apple', 23];
