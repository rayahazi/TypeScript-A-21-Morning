// Getter and setter - functions:
class Child{

    private _age:number; // undefined

    // Function to create a setter:
    // setter function allow us to check the value - validation check
    public setAge(age:number):void{
        if(age >=0 && age <= 120)
            this._age = age;
    }
    // Function to create a getter:
    public getAge():number{
        return this._age;
    }
}

let ch1 = new Child();
// ch1._age = 1; // Property '_age' is private and only accessible within class 'Child'.
ch1.setAge(3);
// console.log(ch1._age);
console.log(ch1); // Child { _age: 3 }
console.log(ch1.getAge()); // 3


let ch2 = new Child();
ch2.setAge(150);
console.log(ch2.getAge()); // undefined
