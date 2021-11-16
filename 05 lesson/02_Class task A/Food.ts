class Food{

    // Foodname
    private _foodName:string;
    public get FoodName(){
        return this._foodName;
    }
    public set FoodName(foodName:string){
        this._foodName = foodName;
    }

    // Expiration date
    private _lastDate:ExDate;
    public get LastDate(){
        return this._lastDate;
    }
    public set LastDate(lastDate:ExDate){
        this._lastDate = lastDate;
    }

    // Constructor:
    public constructor(foodName:string, lastDate:ExDate){
        this.FoodName = foodName;
        this.LastDate = lastDate;
    }

    // toString() function: 3/11/2020
    toString():string{
        return `Food: ${this.FoodName}, Expiration date: ${this.LastDate}`;
    }
}