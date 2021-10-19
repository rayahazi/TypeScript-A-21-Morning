//Write TS program to take a random integer between 1-10
function func() {
    var num = Math.ceil(Math.random() * 10); // 1-10
    var guess1 = Number(document.getElementById('guess1'));
    console.log("value: " + guess1 + ", type: " + typeof guess1);
}
