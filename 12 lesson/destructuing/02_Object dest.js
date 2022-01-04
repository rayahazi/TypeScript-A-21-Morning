let x, y, others;
({x, y} = {x: 1, y: 2});

console.log(`x = ${x}, y = ${y}`); // x = 1, y = 2

({x, y, ...others} = {x: 1, y: 2, z:3, k:4, m:5});

console.log(`x = ${x}, y = ${y}, others = ${others}`); // x = 1, y = 2, others = [object Object]

console.log(others); // { z: 3, k: 4, m: 5 }
