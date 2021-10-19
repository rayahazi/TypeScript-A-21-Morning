# Functions:

- Basic:

```ts
// Functions:

// 1. function func1(num1: any): any
function func1(num1) {
  return num1;
}

// 2. function func2(): void
function func2() {}

// 3. function func3(num1: number): number
function func3(num1: number) {
  return num1;
}

// 4. function func4(num1: number): string
function func4(num1: number) {
  let str: string = `num1 = ${num1}`;
  return str;
}
```

- Parameter and returned types:

```ts
// 1. parameter types:

let func1 = (myName: string) =>
  console.log(`your name is: ${myName.toUpperCase()}`);

func1("Raaya");
// func1(true); -> Argument of type 'boolean' is not assignable to parameter of type 'string'.

// 2. returned type

let func2 = (): number => {
  return 1;
};

console.log(func2());
/*
your name is: RAAYA
1
*/
```
