# Types in JavaScript

We have 6 types in JS: undefined, number, string, object, boolean, function

```js
let x;
console.log(`typeof x = ${typeof x}`); // typeof x = undefined

x = 4;
console.log(`typeof x = ${typeof x}`); // typeof x = number

x = "hello world";
console.log(`typeof x = ${typeof x}`); // typeof x = string

x = { city: "Jerusalem", country: "Israel" };
console.log(`typeof x = ${typeof x}`); // typeof x = object

x = true;
console.log(`typeof x = ${typeof x}`); // typeof x = boolean

x = () => console.log("hello");
console.log(`typeof x = ${typeof x}`); // typeof x = function
```

# String interpolation

```js
// string interpolation - הזרקת קוד לתוך מחרוזת

// str1 and str2 are exacly the same!
// str3 - allow us to use string interpolation
let str1 = "this is lesson 1";
let str2 = "this is lesson 1";
let str3 = `this is lesson 1`;

let num = 1;
str1 = "this is lesson " + num;
str2 = "this is lesson " + num;
str3 = `this is lesson ${num}`;
```
