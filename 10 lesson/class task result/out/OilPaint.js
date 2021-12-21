class OilPaint {
    constructor(c, p, q) {
        this.color = c;
        this.Price = p;
        this.Quality = q;
    }
    isWaterBase() { return true; }
    set Quality(q) {
        if (q == 'low' || q == 'medium' || q == 'high')
            this._quality = q;
    }
    get Quality() {
        return this._quality;
    }
}
//# sourceMappingURL=OilPaint.js.map