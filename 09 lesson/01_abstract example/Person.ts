abstract class Person{
    public Name:string;
    public Id:string;
    public Age:number;

    public constructor(Name:string, Id:string, Age:number){
        this.Age = Age;
        this.Name = Name;
        this.Id = Id;
    }

    toString():string{
        return `Id: ${this.Id}, name: ${this.Name} is ${this.Age} years old..`
    }
}

// Cannot create an instance of an abstract class.
// let p1 = new Person('John', '34252', 23);