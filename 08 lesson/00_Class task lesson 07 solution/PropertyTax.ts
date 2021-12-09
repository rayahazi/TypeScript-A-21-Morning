class PropertyTax{

    public readonly DiscountDisabled:number;
    public readonly DiscountBussiness:number;
    public readonly DiscountWorker:number;

    private _tax:number;
    public get Tax(){
        return this._tax;
    }
    public set Tax(tax:number){
        if(tax >= 0 && tax <= 10000)
            this._tax = tax;
    }

    public constructor(tax:number){
        this.Tax = tax;
        this.DiscountDisabled = Math.floor(Math.random()*(20-10+1)+10); // 10-20
        this.DiscountBussiness = Math.floor(Math.random()*(25-20+1)+10); // 20-25
        this.DiscountWorker = Math.floor(Math.random()*(10-6+1)+10); // 6-10
    }

    toString():string{
        return `Tax: ${this.Tax}, Discounts: \nDisabled: ${this.DiscountDisabled}, 
        Bussiness: ${this.DiscountBussiness}, Worker: ${this.DiscountWorker}`;
    }

}