class BussinessOwner extends Person{

    private _bName:string;
    public get BName(){
        return this._bName;
    }
    public set BName(bName:string){
            this._bName = bName;
    }

    private _category:string;
    public get Category(){
        return this._category;
    }
    public set Category(category:string){
        if(category == 'food' || category == 'cars' || category == 'fashion')
            this._category = category;
    }

    private _address:string;
    public get Address(){
        return this._address;
    }
    public set Address(address:string){
            this._address = address;
    }

    // Continue. 

    toString(){
        return super.toString() + `Bussiness Name: ${this._bName}, category: ${this.Category}, Address: ${this.Address}`;
    }

    constructor(id:string, fname:string, lname:string,ismale:boolean, age:number, city:string, 
        bname:string, category:string, address:string){
       super(id, fname, lname, ismale, age, city);
       this.BName = bname;
       this.Category = category;
       this.Address = address;
    }
}