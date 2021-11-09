class Person{

    // Properties:
    public name:string;
    public age:number;

    // We can create a ctor that can get all the options:
    public constructor(name?:string, age?:number){
        this.name = name;
        this.age  = age; 
    }
}

// Create instances - each time with different parameters in initializion line:
let p1 = new Person();
let p2 = new Person("Alex");
let p3 = new Person("Alex", 45);
let p4 = new Person(undefined, 45);
