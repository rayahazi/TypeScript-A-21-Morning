// Notice that finally will run before try & catch here. 
// Happens because try and catch only return value. 
const getData = num => {
    console.log("Start getData()");
    try{
        return num.toString();
    } catch(e){
        return e.message;
    }
    finally{
        console.log("In finally.. ");
    }
    console.log("End getData()"); // This code will never run. (using return statement)
}

console.log(getData(3));
console.log(getData([1, 2, 3]));
console.log(getData(null));
/*
Start getData()
In finally.. 
3
Start getData()
In finally..
1,2,3
Start getData()
In finally..
Cannot read property 'toString' of null
*/