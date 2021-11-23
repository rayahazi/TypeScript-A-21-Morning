class Hello{

    // Static function - class level
    static SayHello(name:string){
        console.log(`Hello ${name}`);
    }

    // non-Static function - obejct level
    SayHi(name:string){
        console.log(`Hi ${name}`);
    }
}

Hello.SayHello('Alex');
// Hello.SayHi('Alex'); -> Error

//  We must create an object if we want to use SayHi()
let h1 = new Hello();
h1.SayHi('Alex');
// h1.SayHello('Alex'); -> Error