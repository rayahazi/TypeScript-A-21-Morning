// The first way we can get a readonly property
// 1. Make the property private
// 2. Do not add the `set` method

class Apple{

    // private property:
    private _price: number;

    // get the property outside the class:
    public get Price():number{
        return this._price;
    }
}

let a1 = new Apple();
// Cannot assign to 'Price' because it is a read-only property.
// a1.Price = 5.9;
