class Computer{

    // Private property:
    private _numOfCPUS:number; // undefined

    // setter function with validation:
    public set numOfCPUS(n:number){
        if(n >= 4 && n < 10)
            this._numOfCPUS = n;
    }

    // getter function
    public get numOfCPUS():number{
        return this._numOfCPUS;
    }
}

// With getter and setter we dont need to call as function(but as parameter)
let co1 = new Computer();
// co1.numOfCPUS(5); -> Error
co1.numOfCPUS = 6;
console.log(co1.numOfCPUS);