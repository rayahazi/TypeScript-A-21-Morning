class Bottle{

    // private property:
    private _price: number;

    // get the property outside the class:
    public get Price():number{
        return this._price;
    }
    // set the property outside the class:
    public set Price(price:number){
        this._price = price;
    }

}

let b1 = new Bottle();
// price is not readonly:
b1.Price = 5.9;
