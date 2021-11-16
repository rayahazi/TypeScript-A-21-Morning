var MyFood = [
    new Food("Pizza", new ExDate(2025, 12, 3)),
    new Food("Falafel", new ExDate(2022, 4, 4)),
    new Food("Bread", new ExDate(2020, 2, 8)),
    new Food("Milk", new ExDate(2025, 11, 1)),
    new Food("Butter", new ExDate(2018, 8, 9)),
];
// Print to the console all the data:
for (var _i = 0, MyFood_1 = MyFood; _i < MyFood_1.length; _i++) {
    var item = MyFood_1[_i];
    console.log(item.toString());
}
var res = document.getElementById('res').innerHTML =
    "\n<table border=\"1\">\n        <tr>\n            <th>Food name</th>\n            <th>Expiration date</th>\n        </tr>\n        <tr>\n            <td>" + MyFood[0].FoodName + "</td>\n            <td>" + MyFood[0].LastDate + "</td>\n        </tr>\n        <tr>\n            <td>" + MyFood[1].FoodName + "</td>\n            <td>" + MyFood[1].LastDate + "</td>\n        </tr>\n        <tr>\n            <td>" + MyFood[2].FoodName + "</td>\n            <td>" + MyFood[2].LastDate + "</td>\n        </tr>\n        <tr>\n            <td>" + MyFood[3].FoodName + "</td>\n            <td>" + MyFood[3].LastDate + "</td>\n        </tr>\n        <tr>\n            <td>" + MyFood[4].FoodName + "</td>\n            <td>" + MyFood[4].LastDate + "</td>\n        </tr>\n    </table>\n";
