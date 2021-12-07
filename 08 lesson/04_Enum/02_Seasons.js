var Seasons;
(function (Seasons) {
    Seasons[Seasons["AUTUMN"] = 0] = "AUTUMN";
    Seasons[Seasons["WINTER"] = 1] = "WINTER";
    Seasons[Seasons["SPRING"] = 2] = "SPRING";
    Seasons[Seasons["SUMMER"] = 3] = "SUMMER";
})(Seasons || (Seasons = {}));
var s1 = Seasons.WINTER;
// in ts - we can convert to number - by adding prefix of +
switch (s1) {
    case Seasons.AUTUMN:
        console.log("we are in autumn");
        break;
    case Seasons.WINTER:
        console.log("we are in winter");
        break;
    case Seasons.SPRING:
        console.log("we are in sprint");
        break;
    case Seasons.SUMMER:
        console.log("we are in summer");
        break;
    default: break;
}
