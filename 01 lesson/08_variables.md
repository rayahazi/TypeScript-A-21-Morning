# Variables:

```ts
// 1. Assign values in initializion line:
let myVar1 = 5; // type number. cannot change to other type
// myVar = 'my string'; - Error!
myVar1 = NaN;

// 2. Explicitly give the type in initializion line:
let myVar4: string;
myVar4 = "hello";
myVar4 = "bye";
// myVar4 = 4 - Error@

// 3. Use any - it can change the type of the variable:
let myVar2: any;
myVar2 = NaN;
myVar2 = true;

let myVar3;
myVar3 = 4;
myVar3 = true;
```
