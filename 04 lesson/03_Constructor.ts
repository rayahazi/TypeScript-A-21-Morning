// The ctor will run each time we create an instance:

class X{
    public constructor(){
        console.log("ctor is running!");
    }
}

let x1 = new X(); // ctor is running!
let x2 = new X(); // ctor is running!