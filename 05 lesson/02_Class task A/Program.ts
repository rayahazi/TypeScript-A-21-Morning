let MyFood:Food[] = [
    new Food("Pizza", new ExDate(2025, 12, 3)),
    new Food("Falafel", new ExDate(2022, 4, 4)),
    new Food("Bread", new ExDate(2020, 2, 8)),
    new Food("Milk", new ExDate(2025, 11, 1)),
    new Food("Butter", new ExDate(2018, 8, 9)),
]

// Print to the console all the data:
for (const item of MyFood) {
    console.log(item.toString());
}

let res = document.getElementById('res').innerHTML = 
`
<table border="1">
        <tr>
            <th>Food name</th>
            <th>Expiration date</th>
        </tr>
        <tr>
            <td>${MyFood[0].FoodName}</td>
            <td>${MyFood[0].LastDate}</td>
        </tr>
        <tr>
            <td>${MyFood[1].FoodName}</td>
            <td>${MyFood[1].LastDate}</td>
        </tr>
        <tr>
            <td>${MyFood[2].FoodName}</td>
            <td>${MyFood[2].LastDate}</td>
        </tr>
        <tr>
            <td>${MyFood[3].FoodName}</td>
            <td>${MyFood[3].LastDate}</td>
        </tr>
        <tr>
            <td>${MyFood[4].FoodName}</td>
            <td>${MyFood[4].LastDate}</td>
        </tr>
    </table>
`