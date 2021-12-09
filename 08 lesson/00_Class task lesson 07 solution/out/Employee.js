class Employee extends Person {
    constructor(id, fname, lname, ismale, age, city, salary, StartingDate, hours) {
        super(id, fname, lname, ismale, age, city);
        this.Salary = salary;
        this.StartingDate = StartingDate;
        this.HoursPerMonth = hours;
    }
    get Salary() {
        return this._salary;
    }
    set Salary(salary) {
        if (salary >= 0 && salary <= 30000)
            this._salary = salary;
    }
    get HoursPerMonth() {
        return this._hoursPerMonth;
    }
    set HoursPerMonth(hoursPerMonth) {
        if (hoursPerMonth >= 0 && hoursPerMonth <= 80)
            this._hoursPerMonth = hoursPerMonth;
    }
    get StartingDate() {
        return this._startingDate;
    }
    set StartingDate(startingDate) {
        this._startingDate = startingDate;
    }
    toString() {
        return super.toString() + `Salary:${this.Salary},StartingDate: ${this.StartingDate} hours:${this.HoursPerMonth} startingDate:${this.StartingDate}`;
    }
}
//# sourceMappingURL=Employee.js.map