// Overloading - העמסה
// We can create more than 1 function with the same name in 1 class
class Calculator{

    // We cannot do overloading in ts this way: 
    // public Add(x:number, y:number):void{
    //     console.log(`${x} + ${y} = ${x + y}`);
    // }

    // public Add(x:number, y:number, z:number):void{
    //     console.log(`${x} + ${y} = ${x + y}`);
    // }

    // overloading in ts: 
    public Add1(x:number, y:number, z:number=0):void{
        (z == 0) ? console.log(`${x} + ${y} = ${x + y}`)
        : console.log(`${x} + ${y} + ${z} = ${x + y + z}`)
    }

    public Add2(x: (number | string), y: (number|string)):void{
        if(typeof x == 'number' && typeof y == 'number')
            console.log(`${x} + ${y} = ${x + y}`)
        else console.log(`${x} + ${y} = ${x} ${y}`);
    }
}

let myCalc = new Calculator();
myCalc.Add1(4, 6);
myCalc.Add1(4, 6, 12);

myCalc.Add2(1, 2);
myCalc.Add2('hello', 'world');
myCalc.Add2('hello', 5);
