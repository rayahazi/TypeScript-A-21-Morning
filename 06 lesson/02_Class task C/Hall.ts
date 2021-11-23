class Hall{

    // Hall: Movie, seats
    // movie:
    private myMovie:Movie;
    public set MyMovie(myMovie:Movie){
        this.myMovie = myMovie; 
    }
    public get MyMovie(){
        return this.myMovie;   
    }

    // seats:
    public Seats:boolean[][] = new Array<Array<boolean>>(8);

     public constructor(movie:Movie){
        this.MyMovie = movie;
        // initialize all the rows to have 6 
        for (let row = 0; row < this.Seats.length; row++) {
           this.Seats[row] = new Array<boolean>(6);
        }
     }

     // Buy a ticket to this specific hall:
     BuySeats(amount:number):boolean{
         // Check if there are enough seats:
        let counter = 0;
        for (let row = 0; row < this.Seats.length; row++) 
            for (let column = 0; column < this.Seats[row].length; column++) 
                if(this.Seats[row][column] == undefined) counter++;             
        // If there are less seats than the order(amount) - return false
        if (counter < amount) return false;
        // else - if there are enough seats:
        for (let row = 0; row < this.Seats.length; row++) {
            for (let column = 0; column < this.Seats[row].length; column++) {
                if(this.Seats[row][column] == undefined) {
                    this.Seats[row][column] = true;
                    amount--;
                } 
                if(amount == 0) break;
            }
            if(amount == 0) break;
        }
        // if we were able to buy tickets - return true
        return true;
    }

    toString():string{
        let res:string = `${this.MyMovie}\n`;
        res += `\nSeats: V - full\n\n`
        for (const row of this.Seats) {
            for (const column of row) {
                // if column is true - add V to the seat, else - add -
                res += (column == true) ? " V " : " - ";
            }
            res += `\n`
        }
        return res;
    }
}