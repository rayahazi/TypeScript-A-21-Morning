class Profession {

    // name:
    private name:string;
    public set Name(name:string){
        this.name = name; 
    }
    public get Name(){
        return this.name;   
    }

    // hoursPerMonth:
    private hoursPerMonth:number;
    public set HoursPerMonth(hoursPerMonth:number){
        if(hoursPerMonth >= 0 && hoursPerMonth <= 80)
            this.hoursPerMonth = hoursPerMonth; 
    }
    public get HoursPerMonth(){
        return this.hoursPerMonth;   
    }

     // salary:
     private salary:number;
     public set Salary(salary:number){
         if(salary >= 0 && salary <= 100000)
             this.salary = salary; 
     }
     public get Salary(){
         return this.salary;   
     }

    // ctor:
    public constructor(name:string, hoursPerMonth:number, salary:number){
        this.Name = name;
        this.HoursPerMonth = hoursPerMonth;
        this.Salary = salary;
    }

    toString(){
        return `Profession: ${this.Name}, works: ${this.HoursPerMonth} hours in a month, and earns: ${this.Salary} shekel`
    }
}