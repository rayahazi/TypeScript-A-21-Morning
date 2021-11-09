class House{

    // Private property:
    private _numOfRooms:number; // undefined

    // Write-only: Create only a setter for numOfRooms 
    public set NumOfRooms(n:number){
        if(n >= 2 && n < 20)
            this._numOfRooms = n;
    }

    // Private property:
    private _city:string = 'Ariel';

     // read-only: Create only a getter for city 
     public get City():string{
        return this._city;
    }
}

let h1 = new House();
h1.NumOfRooms = 6;
// console.log(h1.NumOfRooms); -> Error. write-only property. 

// Cannot assign to 'City' because it is a read-only property.
// h1.City = 'Jerusalem';
console.log(h1.City);


