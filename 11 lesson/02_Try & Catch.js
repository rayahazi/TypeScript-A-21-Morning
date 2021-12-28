let num = null;

console.log("Start program..");

// We wrap the problematic code with try & catch:
// try must come with catch (reserved words). 
// If the code inside try is ok - we do not go to catch. 
// Else - if code returns error - we will enter to catch
try{
    console.log(num.toString());
} catch(error){
    console.log(error);
}


// Notice that the program will continue running!!
console.log("End program.."); 

/*
Start program..
TypeError: Cannot read property 'toString' of null
    at Object.<anonymous> (C:\Users\raya\Desktop\Lessons A 2021\TypeScript A\11 lesson\02_Try & Catch.js:7:21)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
End program..
*/