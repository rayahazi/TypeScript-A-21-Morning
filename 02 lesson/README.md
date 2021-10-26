# Arrays

TypeScript arrays are used to store multiple variables in a single variable.

#### Declare arrays:

- In typeScript we can declare arrays in 2 ways:
  1. using [] - square brackets. This is similar to JavaScript.
  2. using Array interface - generic types. `Array<elementType>`
     Both ways produce the same result.

```ts
let cars1: string[] = ["Toyota", "Subaro"];
let cars2: Array<string> = ["Toyota", "Subaro"];
```

- multitype arrays:

```ts
let myCar1: (string | number)[] = ["Toyota", 436577];
let myCar2: Array<string | number> = ["Toyota", 436577];
```

## Array methods

```
pop() - Removes the last element of the array and return that element
push() - Adds new elements to the array and returns the new array length
sort() - Sorts all the elements of the array
concat() - Joins two arrays and returns the combined result
indexOf() - Returns the index of the first match of a value in the array (-1 if not found)
copyWithin() - Copies a sequence of elements within the array
fill() - Fills the array with a static value from the provided start index to the end index
shift() - Removes and returns the first element of the array
splice() - Adds or removes elements from the array
unshift() - Adds one or more elements to the beginning of the array
includes() - Checks whether the array contains a certain element
join() - Joins all elements of the array into a string
lastIndexOf() - Returns the last index of an element in the array
slice() - Extracts a section of the array and returns the new array
toString() - Returns a string representation of the array
toLocaleString() - Returns a localized string representing the array
```

# Matrix:

Matrix is a 2 dimentional array. (similar to a table)

## Deeper view on array & matrix

#### States of initializing an array:

- empty array - reference type variable (arr = [])
- empty array with specific size (using `new` keyword)

```ts
let cars: Array<string> = new Array<string>(4);
```

- array with values in initialization line

When we create uninitialized generic array, for example: `let x: Array<number>;` x is reference type variable in memory. But we still did not create the object itself. (there was no use in the word `new`) therefore it will contain `undefined`

- This code will give us an error

```ts
let x: Array<number>;
document.write("x.length = " + x.length);
```

- But when we add the `new` keyword - we create in memory array with specific size (5 here)
- variable x will contain redirection to the first element in the array.
- each address will contain `undefined`

```ts
let x: Array<number> = new Array<number>(5);
document.write("x.length = " + x.length);
```

#### States of initializing matrix:

<img src="mat.png">

every matrix contains:

1. main array - one-dimentional array when every cell contains redirection to secondary array
2. secondary arrays - one-dimentional array when every cell contains a single value of the defined type of the matrix

- empty matrix - reference type variable

variable x contains simple `undefined`, without any redirection

```ts
let x: Array<Array<number>>;
```

- empty matrix with specific size for rows (using `new` keyword)

here x will contain redirection to 2 cells in memory. (to the first cell)
each cell will contain `undefined`

```ts
x = new Array<Array<number>>(2);
```

- empty matrix with specific size for rows + columns (using `new` keyword)

here x will contain redirection to 2 cells in memory. (to the first cell)
each cell will contain another redirection to one-dimentional array with 3 cells.
each cell will be `undefined`

```ts
x[0] = new Array<number>(3);
x[1] = new Array<number>(3);
```

- matrix with values

```ts
x[0][0] = 3;
x[0][1] = 6;
x[0][2] = 9;
x[1][0] = 4;
x[1][1] = 8;
x[1][2] = 12;
```
