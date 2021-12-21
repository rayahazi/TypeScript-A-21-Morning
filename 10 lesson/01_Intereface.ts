// Every class that implements the interface
// - must implement its properties & methods. 

interface IAction{
    MoveLeft(steps:number):string;
    MoveRight(steps:number):string;
}

class Car implements IAction{
    MoveLeft(steps: number): string {
        return `The car drives ${steps} km to the left`;
    }

    MoveRight(steps: number): string {
        return `The car drives ${steps} km to the right`;
    }
}

class Animal implements IAction{
    MoveLeft(steps: number): string {
        return `The animal moved ${steps} steps to the left`;
    }

    MoveRight(steps: number): string {
        return `The animal moved ${steps} steps to the right`;
    }
}

let myCar = new Car();
console.log(myCar.MoveLeft(12));
console.log(myCar.MoveRight(45));

let myAnimal = new Animal();
console.log(myAnimal.MoveLeft(30));
console.log(myAnimal.MoveRight(30));


