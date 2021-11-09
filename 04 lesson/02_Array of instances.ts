class Car{
    // Properties:
    public name:string;
    public year:number;
}

// 3 instances of class `Car`
let c1 = new Car();
c1.name = 'Toyota';
c1.year = 2002;

let c2 = new Car();
c2.name = 'Mercedes';
c2.year = 2000;

let c3 = new Car();
c3.name = 'Ferari';
c3.year = 2020;

// Array of Car objects:
let myCars:Car[] = [c1, c2, c3];

// Loop over the array:
for (const car of myCars) {
    console.log(car.name, car.year);
}

/*
Toyota 2002
Mercedes 2000
Ferari 2020
*/