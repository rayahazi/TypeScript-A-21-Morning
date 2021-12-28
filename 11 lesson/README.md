# Lesson 11 - Error handling

- **try** - inside try we put the code that can make an error.
- **catch** - the catch block will run if there is an error in the try block. (catch the error).
- **finally** - finally block will always run - whether there is an error or not.

- **throw** - throw is a keyword that we can use to throw an error.

```js
// here we can put the safe code. (will not ruin the program).
try {
  // here inside the try: we put the code that can make an error.
} catch (error) {
  // here inside the catch: if there is an error in the try block, the catch block will be executed.
} finally {
  // finally block will always run - whether there is an error or not.
}
// another code - will run after the try block, whether there is an error or not.
```

## Return with finally:

note: if a try catch in a function use `return` keyword, the finally will run first, but will not change the value of the returned statement in the try / catch.

```js
function func() {
  let num = 1;
  try {
    return `In try: num = ${num}`;
  } catch (error) {
    return `In catch: num = ${num}`;
  } finally {
    num++;
    console.log(`In finally: num = ${num}`);
  }
}

console.log(func());
// Output:
// In finally: num = 2
// In try: num = 1
```

## Throw

The throw statement is a user-defined execption. It goes to the cantch directly if there is an error. If there is no `catch` - the program will stop!

```js
throw "This is an error message";
```

- Throw types: can be string, number, booean, or Error() object.

```js
throw "This is an error!";
throw 127;
throw false;
throw new Error("This is an error!");
```

## Error interface: (object)

> All the error classes are sub-classes of `Error`.

- name - will be the error type
- message - description of error

```
interface Error {
    name: string;
    message: string;
    stack?: string;
}
```

**Common error classes:**

- InternalError
- RangeError
- TypeError
- SyntaxError
- RefereceError

* Properties of an Error class:

```js
e.message;
e.name;
```

### InstaceOf

**instaceOf** keyword checks if an object is from a specific class:

```js
console.log(obj_name instanceof class_name);
console.log(e instanceof ReferenceError);
```
