class Person{

    public Name:string;
    public Birthdate: Birthday;
    public MyAddress: Address;
    public myProfession: Profession;

    public constructor(name:string, birthday:Birthday, addr:Address, prof:Profession){
        this.Name = name;
        this.Birthdate = birthday;
        this.MyAddress = addr;
        this.myProfession = prof;
    }

    toString():string{
        return `Person: ${this.Name}, was born in: ${this.Birthdate}. 
        lives in ${this.MyAddress}, and works as a ${this.myProfession}`
    }

}