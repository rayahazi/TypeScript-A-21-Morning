// throw new Error() - we can create our own errors

function validateAge(age){
    if (age >= 0 && age >= 120) console.log(`Your age is ${age}`)
    // we can send a message inside (not must!)
    else throw new Error('Age must be 0 - 120'); 
}


console.log('start program...');

try{
    validateAge(-1);
} catch(e){
    console.log(e.message);
}


console.log('end program...');
/*
start program...
Age must be 0 - 120
end program...
*/