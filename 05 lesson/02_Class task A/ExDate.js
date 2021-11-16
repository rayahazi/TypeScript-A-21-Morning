var ExDate = /** @class */ (function () {
    // Constructor:
    function ExDate(year, month, day) {
        if (day === void 0) { day = 1; }
        this.Year = year;
        this.Month = month;
        this.Day = day;
    }
    Object.defineProperty(ExDate.prototype, "Day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            if (day >= 1 && day <= 31)
                this._day = day;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExDate.prototype, "Month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            if (month >= 1 && month <= 12)
                this._month = month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExDate.prototype, "Year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            if (year >= 2000 && year <= 2200)
                this._year = year;
        },
        enumerable: false,
        configurable: true
    });
    // toString() function: 3/11/2020
    ExDate.prototype.toString = function () {
        return this.Day + "/" + this.Month + "/" + this.Year;
    };
    return ExDate;
}());
