// We have 6 loops in TS - print the array using each loop:

let myArr:string[] = ["Aa", "Bb", "Cc", "Dd"]; 

// 1. While loop
console.log("While loop:");
let counter = 0;
while(counter < myArr.length){
    console.log(myArr[counter]);
    counter++;
}

// 2. Do-While loop
console.log("Do-While loop:");
counter = 0;
do{
    console.log(myArr[counter]);
    counter++;
}while(counter < myArr.length)

// 3. For loop
console.log("For loop:");
for(let i = 0; i < myArr.length; i++)
    console.log(myArr[i]);

// 4. For-in loop : goes over index!!!
console.log("For-in loop:");
for (const item in myArr) {
    console.log(item);
}
// 5. For-of loop : goes over value!!!
console.log("For-of loop:");
for (const item of myArr) {
    console.log(item);
}
// 6. For-each loop - get callback function - arrow function
console.log("For-each loop:");
myArr.forEach(item => console.log(item));
// We can also get the index in forEach
myArr.forEach((item, index) => console.log(item));


/*
While loop:
Aa
Bb
Cc
Dd
Do-While loop:
Aa
Bb
Cc
Dd
For loop:
Aa
Bb
Cc
Dd
For-in loop:
0
1
2
3
For-of loop:
Aa
Bb
Cc
Dd
For-each loop:
Aa
Bb
Cc
Dd
*/
