let num = null;

console.log("Start program..");

// error.message - will show only the basic info about the error. 
try{
    console.log(num.toString());
} catch(error){
    console.log(error.message);
}


// Notice that the program will continue running!!
console.log("End program.."); 

/*
Start program..
TypeError: Cannot read property 'toString' of null
End program..
*/