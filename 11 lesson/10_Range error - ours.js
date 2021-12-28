
function func(num){
    if(num > 10 || num < -10)
        throw new RangeError('Number must be -10 to 10');
}

try{
    func(-12);
} catch(e){
    if(e instanceof RangeError) console.log(e.message);
}

// Number must be -10 to 10