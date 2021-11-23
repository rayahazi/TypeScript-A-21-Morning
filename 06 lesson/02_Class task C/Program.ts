// Movie: name + year + director
// Hall: seats[][], movie:Movie
// Cinema: BuyingTickets(movie, numOfTickets), hall:Hall
// Program


let myCinema:Cinema = new Cinema();

// Create the movies:
let m1 = new Movie("Spiderman", "Alex Cohen", 2000);
let m2 = new Movie("Superman", "Alex Cohen", 2020);
let m3 = new Movie("Wondewoman", "Alex Cohen", 2017);

// Create the halls:
let h1 = new Hall(m1);
let h2 = new Hall(m2);
let h3 = new Hall(m3);

// Insert data to the cinema:
myCinema.MoviesList[0] = m1;
myCinema.MoviesList[1] = m2;
myCinema.MoviesList[2] = m3;

myCinema.HallsList[0] = h1;
myCinema.HallsList[1] = h2;
myCinema.HallsList[2] = h3;

myCinema.BuyTickets("Spiderman", 11);
myCinema.BuyTickets("Superman", 5);

console.log(myCinema);
