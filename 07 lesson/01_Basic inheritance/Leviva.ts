class Leviva extends Food{

    public IsVegan:boolean;

    constructor(price:number, isVegan:boolean){
        super(price);
        this.IsVegan = isVegan;
    }

}