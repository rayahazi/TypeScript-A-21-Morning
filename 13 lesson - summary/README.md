# 01 lesson

- TypeScript is Strongly typed, uses compiler. (JavaScript is not strongly typed, and uses interpreter).

#### Compilation:

For TS to compile and run in VSCode -

- We must have configuration file - `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["es6", "dom", "es2017"],
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./out"
  },
  "exclude": ["node_modules"]
}
```

- We can compile one file using `tsc file_name`
- We can compile all the files using `tsc`

#### Types in TS

- number
- string
- boolean
- any
- object
- array

#### Functions

We have 3 types of functions.
Each function can get parameters (0-many), and return value.

- regular function

```ts
function x() {}
```

- anonymous function
  We use anonymous function for internal use usually.. (for example - as a callback function. For example - setTimeout(), map())

```ts
const x = function () {};
```

- arrow function
  we assign arrow function to a variable.

```ts
const x = () => {};
// if we have only 1 parameter - no need to add ()

const x = (a) => {
  console.log(a);
};

// if we have only 1 statement - no need to have {}
const x = () => console.log(a);

// when we don't add {} - it returns automatically
const x = () => {
  return true;
};
const x = () => true;
```

# 02 lesson

#### Arrays in TypeScript

There are 4 ways to declare an array in Ts:

```ts
let arr1: number[] = [];
let arr2: Array<number> = []; // <> - are used for generics.

// for initialzied size:
let arr3: number[] = new Array<number>(3);
let arr4: Array<number> = new Array<number>(5);

// initialized value:
let arr8: Array<number> = [1, 2, 3];
let arr9: number[] = new Array<number>(1, 2, 3);
```

- Multitype array:

```ts
let a2: Array<string | number> = ["apple", 23];
```

#### Matrix - 2 dimentional array in TS

declare a matrix:

```ts
let mat4: Array<Array<string>>;

// Give size of matrix - create a matrix with 5 rows.
let mat5: Array<Array<string>> = new Array<Array<string>>(5);
mat5[0] = Array<string>(2);
mat5[1] = Array<string>("a", "b", "c", "d");
```

# 03 lesson

#### Loops

There are 6 loops in TS:

1. While loop - will run as long as condition is true.

```ts
while (condition) {
  // action
}
```

2. Do-While loop - will run at least once. After that - will run as long as condition is true.

```ts
do {
  // action
} while (condition);
```

3. For loop

```ts
for (startingPoint; condition; increment) {
  // action
}
```

4. For-in loop - goes on index

```ts
for (item in object) {
  // action
}
```

5. For-of loop - goes on value

```ts
for (item of object) {
  // action
}
```

6. For-each loop - gets a callback function

```ts
arr.forEach(() => {});
```

#### Ref & value types

value types : are primitive types: number, boolean, etc..
reference types: are more advanced: object, array, matrix

- There is a difeerence when copying values of value types and reference types, and with functions...

#### Optional parameters

We can have parameters in functions that aren't must.

- We decalre optional parameter using `?`.

> notice that we cannot add regular parameters after optional parameter

```ts
// Optional parameters - marked as ?
function myFunc2(x1: number, x2?: number): void {
  console.log(`x1 = ${x1}, x2: ${x2}`);
}

myFunc2(45); // 45, undefined
myFunc2(45, 12); // 45, 12
```

#### Default parameters

We can have parameters in functions that aren't must.

- We decalre default parameter using assignment `x:number = 5`.

```ts
// Optional parameters - marked as ?
function myFunc2(x1: number = 5): void {
  console.log(`x1 = ${x1}`);
}

myFunc2(); // 5
myFunc2(45); // 45
```

#### Math library

Is a built-in JS library to handle math calculations

Properties - constants

- E - Euler's number `Math.E`
- PI - `Math.PI`

Methods -

- Math.ceil() - always rounds a number up.
- Math.floor() - always round a number down.
- Math.round() - function returns the value of a number rounded to the nearest integer.
- Math.pow(base, exponent) - power()
- Math.sqrt() - square root for a number.
- Math.Random() - returns a floating-point number (always 0-1)

# 04 lesson - OOP

#### The main goal of OOP - is to simulate the real world objects. for example: Fruits, Cars, People...

#### Class

Class is a template for objects.

```ts
class Tiger {
  // Properties - מאפיינים
  public age: number;

  // Methods - פעולות
  run(km: number): string {
    return `This tiger runs: ${km} km today`;
  }
}

let t1: Tiger = new Tiger();
t1.age = 5;
```

#### Array of instances:

```ts
class Car {
  public name: string;
  public year: number;
}

// Array of Car objects:
let myCars: Car[] = [new Car("Toyota", 2000), new Car("Subaro", 2020)];

// Loop over the array:
for (const car of myCars) {
  console.log(car.name, car.year);
}
```

#### Constructor - בנאי

- We do not have to create constructor. There is a built-in constructor to each class.
- The ctor will run each time we create an instance.

```ts
 public constructor(){
        console.log("ctor is running!");
    }
```

- In typeScript we cannot create multiple constructors. Therefore - we use `default and optional parameters` .

```ts
public constructor(name?:string, age?:number){
        this.name = name;
        this.age  = age;
}
```

#### Encapsulation - כימוס

make properties private, and add 2 functions - get and set so we can access the properties outside the class.

- In setter function we can add validation
- Syntax: private property will usually start with `_`, and lowercase. Public functions - will start with Uppercase.

```ts
class Computer {
  // Private property:
  private _numOfCPUS: number; // undefined

  // setter function with validation:
  public set NumOfCPUS(n: number) {
    if (n >= 4 && n < 10) this._numOfCPUS = n;
  }

  // getter function
  public get NumOfCPUS(): number {
    return this._numOfCPUS;
  }
}

let co1 = new Computer();
co1.NumOfCPUS = 6;
console.log(co1.NumOfCPUS);
```

- we can use encapsulation to get `readonly` and `writeonly` properties:

```ts
class House {
  // Private property:
  private _numOfRooms: number; // undefined

  // Write-only: Create only a setter for numOfRooms
  public set NumOfRooms(n: number) {
    if (n >= 2 && n < 20) this._numOfRooms = n;
  }

  // Private property:
  private _city: string = "Ariel";

  // read-only: Create only a getter for city
  public get City(): string {
    return this._city;
  }
}

let h1 = new House();
h1.NumOfRooms = 6;
// console.log(h1.NumOfRooms); -> Error. write-only property.

// Cannot assign to 'City' because it is a read-only property.
// h1.City = 'Jerusalem';
console.log(h1.City);
```

# 05 lesson - Composition - הכלה, הרכב

Allow class to contain object instances in other classes, so they can be used to preform actions related to that class.

* Has - is the relationship

```ts
class CPU{}

class Computer{
    // property type CPU
    public MyCpu:CPU;
}

```