// throw - we must catch throw using try & catch

// isNaN - check if a value is a number.. 
const calcRectangle = (height, width) => {
    if(isNaN(height) || isNaN(width))
        throw "Height or width is not a number.. Please try again";
    return height * width;
}

console.log("Start program...");
try{
    console.log(calcRectangle(12, "xxx"));
} catch(e){
    console.log(e);
}
console.log("End program...");

/*
Start program...
Height or width is not a number.. Please try again
End program...
*/
