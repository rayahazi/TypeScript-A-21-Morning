class Pen {
    constructor(c, y, s, t) {
        this.color = c;
        this.Year = y;
        this.PType = t;
        this.Size = s;
    }
    isWaterBase() { return true; }
    set Size(s) {
        if (s == 0.4 || s == 0.5 || s == 0.7)
            this._size = s;
    }
    get Size() {
        return this._size;
    }
    set PType(t) {
        if (t == 'gel' || t == 'ink' || t == 'brush')
            this._ptype = t;
    }
    get PType() {
        return this._ptype;
    }
}
//# sourceMappingURL=Pen.js.map