interface IRun{
    speed:number;
    startRunning(speed:number):String;
}

interface IEat{
    favFood:string;
    startEating(food:string, time:number):String;
}

interface ISleep{
    startSleeping(time:number):String;
}

// Interface that implements other interfaces - 
// will use `extends`
interface IAction extends IEat, ISleep{}

// A class can implelement more than 1 interface:
class Person implements IAction, IRun{
    // IRun:
    speed: number;
    startRunning(speed: number = this.speed): string {
        return `Person runs ${speed} km per hour`;
    }
    // IAction:
    favFood: string = 'Coffee';
    startEating(food: string, time: number): string {
        return `Person eats ${food} in ${ time} minutes..`;
    }
    startSleeping(time: number): string {
        return `Person sleeps for ${time} hours..`
    }
}

let p1 = new Person();
p1.speed = 12;
p1.startRunning(); // Person runs 12 km per hour
p1.startRunning(30); // Person runs 30 km per hour

p1.startEating('Salad', 30); // Person eats Salad in 30 minutes..
console.log(`my favorite food: ${p1.favFood}`);

p1.startSleeping(5.4); // Person sleeps for 5.4 hours..
