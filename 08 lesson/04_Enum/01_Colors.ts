// enum - enumerable type value:
enum Color{
    Black,
    Green,
    Blue
}

// 3 ways to access enum:
console.log(Color[0]); // Black

console.log(Color.Green); // 1 -> index

console.log(Color[Color.Blue]); // Blue

// Create instance from enum type:
let co1:Color = 2;
console.log(co1); // 2
console.log(Color[co1]); // Blue

let co2:Color = Color.Green;
console.log(co2); // 1
console.log(Color[co2]); // Green
