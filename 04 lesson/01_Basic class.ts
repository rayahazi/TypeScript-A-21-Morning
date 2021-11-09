// Create a template: 
class Tiger{
    // Properties - מאפיינים
    public age:number;

    // Methods - פעולות
    run(km:number):string{
        return `This tiger runs: ${km} km today`;
    }
}

// Create instances of the class: 
// instance - מופע - אובייקט של אותה המחלקה
let t1:Tiger = new Tiger();
t1.age = 5;

let t2:Tiger = new Tiger();
t2.age = 8;

// Access properties of the objects:
console.log(t1.age); // 5
console.log(t2.age); // 8

// Access methods:
console.log(t1.run(50)); // This tiger runs: 50 km today
console.log(t2.run(10)); // This tiger runs: 10 km today

