let num = 5;

console.log("Start program..");

// error.message - will show only the basic info about the error. 
try{
    console.log(num.toString());
} catch(error){
    console.log(error.message);
} finally{
    console.log("Finally will always run!");
}


// Notice that the program will continue running!!
console.log("End program.."); 

/*

----- in error:
Start program..
Cannot read property 'toString' of null
Finally will always run!
End program..

----- in success:
Start program..
5
Finally will always run!
End program..
*/