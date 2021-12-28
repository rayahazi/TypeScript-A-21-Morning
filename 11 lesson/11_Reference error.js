
try {
    console.log(`num = ${num}`);
} catch(e){
    console.log(e instanceof ReferenceError);
    console.log(e.message);
    console.log(e.name);
}

/*
true
num is not defined
ReferenceError
*/