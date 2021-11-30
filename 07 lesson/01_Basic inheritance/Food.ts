class Food{
    // private property:
    private _price: number;
    // public:
    public set Price(p:number){
        if(p > 0) this._price = p;
    }
    public get Price(){
        return this._price;
    }

    // ctor:
    constructor(price:number){
        this.Price = price;
    }
}

