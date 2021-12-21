class Pencil {
    constructor(c, co, s, h) {
        this.color = c;
        this.Company = co;
        this.HasEraser = h;
        this.Size = s;
    }
    isWaterBase() { return false; }
    set Size(s) {
        if (s == 1 || s == 2 || s == 3)
            this._size = s;
    }
    get Size() {
        return this._size;
    }
}
//# sourceMappingURL=Pencil.js.map