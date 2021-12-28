// JS (and TS) works with interpreter.. the code will run line after line

let num = null;

console.log("Start..");

console.log(num.toString());

console.log("End.."); // The program will never reach this line.. 


/*
Start..
C:\Users\raya\Desktop\Lessons A 2021\TypeScript A\11 lesson\01_Error problem.js:3
console.log(num.toString());
                ^
TypeError: Cannot read property 'toString' of null
 */