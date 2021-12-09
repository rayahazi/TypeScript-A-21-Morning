class Person {
    constructor(id, fname, lname, ismale, age, city) {
        this.Id = id;
        this.FName = fname;
        this.LName = lname;
        this.Age = age;
        this.IsMale = ismale;
        this.City = city;
    }
    get Id() {
        return this._id;
    }
    set Id(id) {
        if (id.length == 9 && id.match(/^[0-9]+$/) != null)
            this._id = id;
    }
    get FName() {
        return this._fName;
    }
    set FName(fName) {
        this._fName = fName;
    }
    get LName() {
        return this._lName;
    }
    set LName(lName) {
        this._lName = lName;
    }
    get Age() {
        return this._age;
    }
    set Age(age) {
        if (age >= 0 && age <= 120)
            this._age = age;
    }
    get IsMale() {
        return this._isMale;
    }
    set IsMale(isMale) {
        this._isMale = isMale;
    }
    get City() {
        return this._city;
    }
    set City(city) {
        this._city = city;
    }
    toString() {
        return `ID: ${this.Id}, Name: ${this.FName} ${this.LName}, age: ${this._age}, isMale: ${this.IsMale}, city: ${this.City}`;
    }
}
//# sourceMappingURL=Person.js.map