class Disabled extends Person {
    constructor(id, fname, lname, ismale, age, city, typeOfDisability) {
        super(id, fname, lname, ismale, age, city);
        this.TypeOfDisability = typeOfDisability;
    }
    get TypeOfDisability() {
        return this._typeOfDisability;
    }
    set TypeOfDisability(typeOfDisability) {
        this._typeOfDisability = typeOfDisability;
    }
    toString() {
        return super.toString() + `TypeOfDisability: ${this.TypeOfDisability}`;
    }
}
//# sourceMappingURL=Disabled.js.map