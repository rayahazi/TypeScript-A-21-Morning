// recursive function - call itseft way too many times

// recursive functions have limited rounds.. (we don't want to reach `stack overflow`)
function rangeError(num){
    if( num > 100000000000000) return;
    rangeError(num + 1);
}

rangeError(0); // RangeError: Maximum call stack size exceeded
