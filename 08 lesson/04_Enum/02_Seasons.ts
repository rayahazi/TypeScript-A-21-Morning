enum Seasons{
    AUTUMN,
    WINTER,
    SPRING,
    SUMMER
}

let s1 = Seasons.WINTER;
// we can also do: let s1:number = Seasons.WINTER;

// in ts - we can convert to number - by adding prefix of +
switch(+s1){
    case Seasons.AUTUMN: console.log("we are in autumn");
        break;
    case Seasons.WINTER: console.log("we are in winter");
        break;
    case Seasons.SPRING: console.log("we are in sprint");
        break;
    case Seasons.SUMMER: console.log("we are in summer");
        break;
    default: break;
}