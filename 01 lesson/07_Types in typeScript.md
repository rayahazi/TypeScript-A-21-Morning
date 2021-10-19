# Types in TypeScript

### Basic types:

- number - all numbers. can be integers or floats.
- string - all text values
- boolean - true/false
- any - can be any type.

```ts
// 1. Numbers:

let num1: number = 5; // integer
let num2: number = 5.2; // float
let num3: number = NaN; // typeof number. NaN - Not a number. Empty numeric value.
let num4: number = Number("7.4"); // 7.4
let num5: number = parseInt("7.4"); //  7
let num6: number = parseFloat("7.4"); //  7.4

// num1 = 'hello'; -> Error. not the same type.

// 2. Strings:
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = num6.toString();
let str5: string = num6 + " num6";
let str6: string = `num6 = ${num6}`;

// 3. Boolean:
let bool1: boolean = true;
let bool2: boolean = false;
let bool3: boolean = 5 > 8; // condition that returns boolean value

// 4. Any:
let anyValue: any = num1;
anyValue = str1;
anyValue = bool1;
```
