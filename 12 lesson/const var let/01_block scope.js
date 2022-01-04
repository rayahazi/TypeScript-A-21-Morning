// The best option for iterating over loops is `let`. 
// we can also know that from the reference script

const arr = ['a', 'b', 'c'];

// Use var
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

console.log(`i = ${i}`); // i = 3


// Use let
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

console.log(`j = ${j}`); // ReferenceError: j is not defined

// use const 
for (const k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

// k++ : TypeError: Assignment to constant variable.