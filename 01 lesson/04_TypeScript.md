# TypeScript

- The TypeScript language first made public in 2012
- It developed and maintained by Microsoft
- TS is strongly typed language, which adds Types to JavaScript.
- TypeScript is Multi-paradigm(תבנית): functional, generic, object-oriented

> Every browser can run: HTML, CSS, JavaScript. To run TypeScript - (that uses compiler) we must compile the code to JavaScript.

### JavaScript vs TypeScript

- TypeScript code must be compiled, while JavaScript uses interpreter.
- TypeScript is strongly-typed, while JavaScript isn't.

### TypeScript adds:

- Types
- Non-JS features: interfaces, generics
- Meta-programming features (decorators)
- Etc...

### Example:

- As we see - we can send any type, any amount of variables, to the function. This is a problem. (people's mistakes, security).
- TypeScript solves that by adding types!

```js
// There are no types in JS:
let x = 4;
x = "hello students";
x = false;
x = () => console.log("hi");

// There is no check of arguments sending to functions:
myFunc = (num1, num2) => console.log(num1 * num2);

myFunc(2, 3); // 6
myFunc("hello", "bye"); // NaN
myFunc(4); // NaN
myFunc(4, 5, 6); // 20
```
