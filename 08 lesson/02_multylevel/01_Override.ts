class A{
    public Try():void{
        console.log("Try A");
    }
}

class B extends A{
    public Try():void{
        console.log("Try B");
    }
}

class C extends A{
    public Try():void{
        console.log("Try C");
    }
}


let a5 = new A();
let a6 = new B();
let a7 = new C();

a5.Try(); // Try A
a6.Try(); // Try B
a7.Try(); // Try C
