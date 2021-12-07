class Dairy extends MyFood{

    public Company:string;

    public constructor(price:number, company:string){
        super(price);
        this.Company = company;
    }

}