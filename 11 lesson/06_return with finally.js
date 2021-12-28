// If we have return in try  & catch - finally will run first. 
// try and catch statements will be kept in another place. 
// They will not change according to finally. 
const getData = () => {
    let num = 1;
    console.log(`Start getData(). num = ${num}`);

    try{
        return `In try. num = ${num}`;
    }catch(e){
        return `In catch. num = ${num}`;
    } finally{
        num++;
        console.log(`In finally. num = ${num}`);
    }
}

console.log(getData());
/*
Start getData(). num = 1
In finally. num = 2
In try. num = 1
*/