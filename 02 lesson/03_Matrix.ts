// empty matrix:
let mat1:string[][];
let mat2:string[][] = [][3];

// give initialized data:
let mat3:number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// access data in the matrix:
console.log(mat3);       // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(mat3[0]);    // [ 1, 2, 3 ]
console.log(mat3[0][1]); // 2
console.table(mat3); 
/*
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
└─────────┴───┴───┴───┘
*/

// ------------------------------------


// empty matrix using generics:
let mat4:Array<Array<string>>;

// Give size of matrix - create a matrix with 5 rows. 
let mat5:Array<Array<string>> = new Array<Array<string>>(5);
mat5[0] = Array<string>(2);
mat5[1] = Array<string>('a','b','c','d');

console.log(mat5); // [ [ <2 empty items> ], [ 'a', 'b', 'c', 'd' ], <3 empty items> ]
console.log(mat5[1]); // [ 'a', 'b', 'c', 'd' ]
console.log(mat5[1][3]); // d
console.table(mat5);
/*
┌─────────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │
├─────────┼─────┼─────┼─────┼─────┤
│    0    │     │     │     │     │
│    1    │ 'a' │ 'b' │ 'c' │ 'd' │
└─────────┴─────┴─────┴─────┴─────┘

*/





