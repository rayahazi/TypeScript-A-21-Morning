class Address {
    // ctor:
    constructor(houseNum, street, city, country) {
        this.HouseNum = houseNum;
        this.Street = street;
        this.City = city;
        this.Country = country;
    }
    set HouseNum(houseNum) {
        if (houseNum >= 0)
            this.houseNum = houseNum;
    }
    get HouseNum() {
        return this.houseNum;
    }
    set Street(street) {
        this.street = street;
    }
    get Street() {
        return this.street;
    }
    set City(city) {
        this.city = city;
    }
    get City() {
        return this.city;
    }
    set Country(country) {
        if (country == 'Israel' || country == 'France' || country == 'Italy')
            this.country = country;
    }
    get Country() {
        return this.country;
    }
    toString() {
        return `Address: ${this.Country}: ${this.City}, 
        street ${this.Street}, houseNumber: ${this.HouseNum}`;
    }
}
class Birthday {
    // ctor:
    constructor(day, month, year) {
        this.Day = day;
        this.Month = month;
        this.Year = year;
    }
    set Day(day) {
        if (day > 0 && day <= 31)
            this.day = day;
    }
    get Day() {
        return this.day;
    }
    set Month(month) {
        if (month > 0 && month <= 12)
            this.month = month;
    }
    get Month() {
        return this.month;
    }
    set Year(year) {
        if (year > 1000 && year <= 9999)
            this.year = year;
    }
    get Year() {
        return this.year;
    }
    toString() {
        return `Birthdate: ${this.day}/${this.month}/${this.year}`;
    }
}
// import Birthday from "./Birthday";
// import Address from "./Address";
// import Profession from "./Profession";
class Person {
    constructor(name, birthday, addr, prof) {
        this.Name = name;
        this.Birthdate = birthday;
        this.MyAddress = addr;
        this.myProfession = prof;
    }
    toString() {
        return `Person: ${this.Name}, was born in: ${this.Birthdate}. 
        lives in ${this.MyAddress}, and works as a ${this.myProfession}`;
    }
}
class Profession {
    // ctor:
    constructor(name, hoursPerMonth, salary) {
        this.Name = name;
        this.HoursPerMonth = hoursPerMonth;
        this.Salary = salary;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set HoursPerMonth(hoursPerMonth) {
        if (hoursPerMonth >= 0 && hoursPerMonth <= 80)
            this.hoursPerMonth = hoursPerMonth;
    }
    get HoursPerMonth() {
        return this.hoursPerMonth;
    }
    set Salary(salary) {
        if (salary >= 0 && salary <= 100000)
            this.salary = salary;
    }
    get Salary() {
        return this.salary;
    }
    toString() {
        return `Profession: ${this.Name}, works: ${this.HoursPerMonth} hours in a month, and earns: ${this.Salary} shekel`;
    }
}
// import Birthday from "./Birthday";
// import Address from "./Address";
// import Profession from "./Profession";
// import Person from "./Person";
let myPeople = [
    new Person('Alex', new Birthday(1, 4, 1993), new Address(45, 'aaa', 'Ariel', 'Israel'), new Profession('teacher', 40, 10000)),
    new Person('Bracha', new Birthday(2, 5, 1995), new Address(45, 'aaa', 'Ariel', 'Israel'), new Profession('teacher', 40, 10000))
];
for (const person of myPeople) {
    console.log(person.toString());
}
//# sourceMappingURL=out.js.map