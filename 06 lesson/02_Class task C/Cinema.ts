class Cinema{

    // movie list - 80:
    private moviesList:Movie[];
    public set MoviesList(moviesList:Movie[]){
        this.moviesList = moviesList; 
    }
    public get MoviesList(){
        return this.moviesList;   
    }

    // halls list - 8:
    private hallsList:Hall[];
    public set HallsList(hallsList:Hall[]){
        this.hallsList = hallsList; 
    }
    public get HallsList(){
        return this.hallsList;   
    }

    // Every time we create a new cinema: it will happen automatically:
    public constructor(){
        this.moviesList = new Array<Movie>(80);
        this.hallsList = new Array<Hall>(8);
    }

    
    BuyTickets(movieName:string, amount:number):boolean{
        let res:boolean = false;
        for (let i = 0; i < this.hallsList.length; i++) {
            // Check which hall has the same movie we want: 
            if(this.hallsList[i] != undefined && this.hallsList[i].MyMovie.Name == movieName)
                // redirect to the function that can buy tickets
                res = this.hallsList[i].BuySeats(amount);
        }
        return res;
    }

    toString():string{
        let res:string = `--- My cinema ---\n`;
        for (let i = 0; i < this.hallsList.length; i++) {
            if(this.hallsList[i] != undefined){
                res += `------- Room ${i+1}  --------\n`
                res += this.HallsList[i].toString();
            }
        } 
        return res;
    }

}