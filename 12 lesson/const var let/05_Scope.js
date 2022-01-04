if(true){
    var myVar = 12345;
    let myLet = 12345;
    const myConst = 12345;
}

console.log(`myVar = ${myVar}`); // myVar = 12345
// console.log(`myLet = ${myLet}`); // ReferenceError: myLet is not defined
console.log(`myConst = ${myConst}`); // ReferenceError: myConst is not defined