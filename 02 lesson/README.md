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

