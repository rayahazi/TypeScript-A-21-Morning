# Homework

### A. Array - sum of cells - using index

1. Write a typeScript program to define 2 arrays, each one with 10 cells,
   with number type values.
2. Insert to each array values in initialization line.
3. The program will create a third array that will contain the sum of each 2 cells from the 2 arrays.
4. Print all the arrays to the console.
   For example:

```ts
[1, 2, 3][(4, 5, 6)];

result: [5, 7, 9];
```

### B. Array - even or odd

1. Write a typeScript program to define an array with 15 cells.
   and add 15 numbers to it.
2. Create another 2 arrays -
   - The first will contain the values from the even cells in the array
   - The second will contain the values from the odd cells in the array
3. Print all the arrays to the console.
   For example:

```ts
[1, 2, 3, 4, 5];

arr1 = [2, 4];
arr2 = [1, 3, 5];
```

### C. Array - uppercase & lowercase

1. Write a typeScript program to define an array with 15 cells.
   and add 15 strings to it.
2. Create another 2 arrays -
   - The first will contain the values that start with uppercase in the array
   - The second will contain the values that start with lowercase in the array
3. Print all the arrays to the console.
   For example:

```ts
["a", "A", "b", "B"];

arr1 = ["A", "B"];
arr2 = ["a", "b"];
```

### D. matrix - power & multiplication

1. Write a typeScript program to define a matrix, [2][3] with integer numbers initialized.
2. Create 1 new matrix with the same size, that will contain the power for each number.
3. Create 2 new matrix with the same size, that will contain the multiplication for each number.
   For example:

```ts
[
  [1, 2],
  [3, 4],
][([2, 4], [9, 16])];
```

4. Print the 3 matrix, using table.

### E. Matrix - Bubble sort

1. Write a typeScript program to define a matrix, [5][5] with integer numbers initialized.
2. Create an arrow function that will return the matrix after sorting using - bubble sort.
3. Print the sorted matrix.

### F. Matrix - Magic square

A magic square is a matrix when sum of variables in every row, column and the 2 diagonals is equal.
Write a function to get a matrix and return whether the matrix is magic / not.

- for example - this is a magic square: (all return sum of 15)

```ts
8 | 1 | 6;
3 | 5 | 7;
4 | 9 | 2;
```

### G. Matrix - max & min sum of rows

1. Write a typeScript program to define a matrix, [5][5] with integer numbers initialized.
2. The program will print:
   A. The sum of the values from the row with the max sum + the index of this row
   B. The sum of the values from the row with the minimun sum + the index of this row.

- for example:

```
9 | 8 | 6 | 19 | 1
4 | 7 | 7 | 25 | 2
20 | 10 | 32 | 97| 32
2  | 3 | 8 | 21 | 4
4 | 3 | 2 | 45 |  5

The output:
row with max sum is: 3, with sum of: 191.
row with min sum is: 4, with sum of: 38
```
