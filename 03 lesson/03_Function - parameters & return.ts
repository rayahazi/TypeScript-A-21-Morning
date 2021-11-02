// 1. function that has no parameters and return no value:

function a():void{
    console.log("I am a");
}

a(); 

// 2. function that has parameters and return no value:

function b(name:string):void{
    console.log(`I am ${name}`);
}

b("B");

// 3. function that has no parameters and return value:

function c():string{
    return `I am c`;
}

console.log(c());

// 4. function that has parameters and return value:

function d(name:string, age:number):string{
    return `I am ${name}, and I am ${age} years old...`;
}
console.log(d("Alex", 45));
