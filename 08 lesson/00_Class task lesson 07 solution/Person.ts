class Person{

    private _id:string;
    public get Id(){
        return this._id;
    }
    public set Id(id:string){
        if(id.length == 9 && id.match(/^[0-9]+$/) != null)
            this._id = id;
    }

    private _fName:string;
    public get FName(){
        return this._fName;
    }
    public set FName(fName:string){
        this._fName = fName;
    }

    private _lName:string;
    public get LName(){
        return this._lName;
    }
    public set LName(lName:string){
        this._lName = lName;
    }

    private _age:number;
    public get Age(){
        return this._age;
    }
    public set Age(age:number){
        if(age >= 0 && age <= 120)
            this._age = age;
    }

    private _isMale:boolean;
    public get IsMale(){
        return this._isMale;
    }
    public set IsMale(isMale:boolean){
        this._isMale = isMale;
    }

    private _city:string;
    public get City(){
        return this._city;
    }
    public set City(city:string){
        this._city = city;
    }

    toString(){
        return `ID: ${this.Id}, Name: ${this.FName} ${this.LName}, age: ${this._age}, isMale: ${this.IsMale}, city: ${this.City}`;
    }

    constructor(id:string, fname:string, lname:string,ismale:boolean, age:number, city:string){
        this.Id = id;
        this.FName = fname;
        this.LName = lname;
        this.Age = age;
        this.IsMale = ismale;
        this.City = city;
    }
}