// empty matrix:
var mat1;
var mat2 = [][3];
// give initialized data:
var mat3 = [
    [1, 2, 3],
    [4, 5, 6]
];
// access data in the matrix:
console.log(mat3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(mat3[0]); // [ 1, 2, 3 ]
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
var mat4;
// Give size of matrix - create a matrix with 5 rows. 
var mat5 = new Array(5);
mat5[0] = Array(2);
mat5[1] = Array('a', 'b', 'c', 'd');
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
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2)); // true
console.log(arr.slice(2, 4));
