class Cinema {
    // Every time we create a new cinema: it will happen automatically:
    constructor() {
        this.moviesList = new Array(80);
        this.hallsList = new Array(8);
    }
    set MoviesList(moviesList) {
        this.moviesList = moviesList;
    }
    get MoviesList() {
        return this.moviesList;
    }
    set HallsList(hallsList) {
        this.hallsList = hallsList;
    }
    get HallsList() {
        return this.hallsList;
    }
    BuyTickets(movieName, amount) {
        let res = false;
        for (let i = 0; i < this.hallsList.length; i++) {
            // Check which hall has the same movie we want: 
            if (this.hallsList[i] != undefined && this.hallsList[i].MyMovie.Name == movieName)
                // redirect to the function that can buy tickets
                res = this.hallsList[i].BuySeats(amount);
        }
        return res;
    }
    toString() {
        let res = `--- My cinema ---\n`;
        for (let i = 0; i < this.hallsList.length; i++) {
            if (this.hallsList[i] != undefined) {
                res += `------- Room ${i + 1}  --------\n`;
                res += this.HallsList[i].toString();
            }
        }
        return res;
    }
}
class Hall {
    constructor(movie) {
        // seats:
        this.Seats = new Array(8);
        this.MyMovie = movie;
        // initialize all the rows to have 6 
        for (let row = 0; row < this.Seats.length; row++) {
            this.Seats[row] = new Array(6);
        }
    }
    set MyMovie(myMovie) {
        this.myMovie = myMovie;
    }
    get MyMovie() {
        return this.myMovie;
    }
    // Buy a ticket to this specific hall:
    BuySeats(amount) {
        // Check if there are enough seats:
        let counter = 0;
        for (let row = 0; row < this.Seats.length; row++)
            for (let column = 0; column < this.Seats[row].length; column++)
                if (this.Seats[row][column] == undefined)
                    counter++;
        console.log(this.Seats);
        // If there are less seats than the order(amount) - return false
        if (counter < amount)
            return false;
        // else - if there are enough seats:
        for (let row = 0; row < this.Seats.length; row++) {
            for (let column = 0; column < this.Seats[row].length; column++) {
                if (this.Seats[row][column] == undefined) {
                    this.Seats[row][column] = true;
                    amount--;
                }
                if (amount == 0)
                    break;
            }
            if (amount == 0)
                break;
        }
        // if we were able to buy tickets - return true
        return true;
    }
    toString() {
        let res = `${this.MyMovie}\n`;
        res += `\nSeats: V - full\n\n`;
        for (const row of this.Seats) {
            for (const column of row) {
                // if column is true - add V to the seat, else - add -
                res += (column == true) ? " V " : " - ";
            }
            res += `\n`;
        }
        return res;
    }
}
class Movie {
    constructor(name, director, year) {
        this.Name = name;
        this.Director = director;
        this.Year = year;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Director(director) {
        this.director = director;
    }
    get Director() {
        return this.director;
    }
    set Year(year) {
        this.year = year;
    }
    get Year() {
        return this.year;
    }
    toString() {
        return `Movie: ${this.Name}, by: ${this.Director}, from ${this.Year}`;
    }
}
// Movie: name + year + director
// Hall: seats[][], movie:Movie
// Cinema: BuyingTickets(movie, numOfTickets), hall:Hall
// Program
let myCinema = new Cinema();
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
console.log(myCinema.toString());
//# sourceMappingURL=out.js.map