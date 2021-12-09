class BussinessOwner extends Person {
    constructor(id, fname, lname, ismale, age, city, bname, category, address) {
        super(id, fname, lname, ismale, age, city);
        this.BName = bname;
        this.Category = category;
        this.Address = address;
    }
    get BName() {
        return this._bName;
    }
    set BName(bName) {
        this._bName = bName;
    }
    get Category() {
        return this._category;
    }
    set Category(category) {
        if (category == 'food' || category == 'cars' || category == 'fashion')
            this._category = category;
    }
    get Address() {
        return this._address;
    }
    set Address(address) {
        this._address = address;
    }
    // Continue. 
    toString() {
        return super.toString() + `Bussiness Name: ${this._bName}, category: ${this.Category}, Address: ${this.Address}`;
    }
}
//# sourceMappingURL=BussinessOwner.js.map