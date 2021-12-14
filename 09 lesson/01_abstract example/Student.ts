class Student extends Person{

    public AvgGrade:number;

    public constructor(name:string, id:string, age:number, avgGrade:number){
        super(name, id, age);
        this.AvgGrade = avgGrade;
    }

    toString(): string {
        return super.toString() + ` avgGrade: ${this.AvgGrade}`
    }

}