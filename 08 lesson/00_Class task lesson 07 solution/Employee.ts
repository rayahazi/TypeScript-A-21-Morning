class Employee extends Person{

    private _salary:number;
    public get Salary(){
        return this._salary;
    }
    public set Salary(salary:number){
        if(salary >= 0 && salary <= 30000)
            this._salary = salary;
    }

    private _hoursPerMonth:number;
    public get HoursPerMonth(){
        return this._hoursPerMonth;
    }
    public set HoursPerMonth(hoursPerMonth:number){
        if(hoursPerMonth >= 0 && hoursPerMonth <= 80)
            this._hoursPerMonth = hoursPerMonth;
    }

    private _startingDate:Date;
    public get StartingDate(){
        return this._startingDate;
    }
    public set StartingDate(startingDate:Date){
        this._startingDate = startingDate;
    }

    toString(){
        return super.toString() + `Salary:${this.Salary},StartingDate: ${this.StartingDate} hours:${this.HoursPerMonth} startingDate:${this.StartingDate}`;
    }

    constructor(id:string, fname:string, lname:string,ismale:boolean, age:number, city:string, 
        salary:number,StartingDate:Date, hours:number){
       super(id, fname, lname, ismale, age, city);
       this.Salary = salary;
       this.StartingDate = StartingDate;
       this.HoursPerMonth = hours;
    }
}