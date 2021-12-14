class Teacher extends Person{

    public HoursPerMonth:number;

    public constructor(name:string, id:string, age:number, hoursPerMonth:number){
        super(name, id, age);
        this.HoursPerMonth = hoursPerMonth;
    }

    toString(): string {
        return super.toString() + ` HoursPerMonth: ${this.HoursPerMonth}`
    }

}