class Food {
    // ctor:
    constructor(price) {
        this.Price = price;
    }
    // public:
    set Price(p) {
        if (p > 0)
            this._price = p;
    }
    get Price() {
        return this._price;
    }
}
/*
Class task:

> Add to each class: constructor + toString().

1. Create parent class: Person: id, name, city.
(add get&set to each property).

2. Create sub-class: Student: avgGrade, lessons(array)
3. Create sub-class: Employee: salary, jobType
4. Create sub-class: Visitor: reason, date: date object.

In program: create 3 objects from each sub-class.
*/ 
//# sourceMappingURL=Food.js.map