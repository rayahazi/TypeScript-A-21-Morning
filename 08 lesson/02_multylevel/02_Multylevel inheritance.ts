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

class C extends B{
    public Try():void{
        console.log("Try C");
    }
}


let a8 = new A();
let a9 = new B();
let a0 = new C();

a8.Try(); // Try A
a9.Try(); // Try B
a0.Try(); // Try C
