var Food = /** @class */ (function () {
    // Constructor:
    function Food(foodName, lastDate) {
        this.FoodName = foodName;
        this.LastDate = lastDate;
    }
    Object.defineProperty(Food.prototype, "FoodName", {
        get: function () {
            return this._foodName;
        },
        set: function (foodName) {
            this._foodName = foodName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "LastDate", {
        get: function () {
            return this._lastDate;
        },
        set: function (lastDate) {
            this._lastDate = lastDate;
        },
        enumerable: false,
        configurable: true
    });
    // toString() function: 3/11/2020
    Food.prototype.toString = function () {
        return "Food: " + this.FoodName + ", Expiration date: " + this.LastDate;
    };
    return Food;
}());
