class Disabled extends Person{

    private _typeOfDisability:string;
    public get TypeOfDisability(){
        return this._typeOfDisability;
    }
    public set TypeOfDisability(typeOfDisability:string){
        this._typeOfDisability = typeOfDisability;
    }

    toString(){
        return super.toString() + `TypeOfDisability: ${this.TypeOfDisability}`;
    }

    constructor(id:string, fname:string, lname:string,ismale:boolean, age:number, city:string, 
       typeOfDisability:string){
       super(id, fname, lname, ismale, age, city);
       this.TypeOfDisability = typeOfDisability;
    }
}