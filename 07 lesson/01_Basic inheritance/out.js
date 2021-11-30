System.register("Food", [], function (exports_1, context_1) {
    "use strict";
    var Food;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Food = class Food {
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
            };
            exports_1("default", Food);
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
        }
    };
});
System.register("Leviva", ["Food"], function (exports_2, context_2) {
    "use strict";
    var Food_1, Leviva;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Food_1_1) {
                Food_1 = Food_1_1;
            }
        ],
        execute: function () {
            Leviva = class Leviva extends Food_1.default {
                constructor(price, isVegan) {
                    super(price);
                    this.IsVegan = isVegan;
                }
            };
            exports_2("default", Leviva);
        }
    };
});
System.register("Salad", ["Food"], function (exports_3, context_3) {
    "use strict";
    var Food_2, Salad;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Food_2_1) {
                Food_2 = Food_2_1;
            }
        ],
        execute: function () {
            Salad = class Salad extends Food_2.default {
                constructor(price, vegs) {
                    super(price);
                    this.Vegs = vegs;
                }
            };
            exports_3("default", Salad);
        }
    };
});
// Food class is the parent class
// Leviva & Salad classes are sub-class
System.register("Program", ["Salad", "Leviva"], function (exports_4, context_4) {
    "use strict";
    var Salad_1, Leviva_1, s1, l1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (Salad_1_1) {
                Salad_1 = Salad_1_1;
            },
            function (Leviva_1_1) {
                Leviva_1 = Leviva_1_1;
            }
        ],
        execute: function () {// Food class is the parent class
            // Leviva & Salad classes are sub-class
            s1 = new Salad_1.default(15, ["Cucumber", "Tomato", "Carrot"]);
            l1 = new Leviva_1.default(5, false);
            console.log(s1);
            console.log(l1);
        }
    };
});
//# sourceMappingURL=out.js.map