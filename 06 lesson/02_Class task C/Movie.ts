class Movie{

    // Movie: name + year + director
    // name:
    private name:string;
    public set Name(name:string){
        this.name = name; 
    }
    public get Name(){
        return this.name;   
    }

    // director:
    private director:string;
    public set Director(director:string){
        this.director = director; 
    }
    public get Director(){
        return this.director;   
    }

     // year:
     private year:number;
     public set Year(year:number){
         this.year = year; 
     }
     public get Year(){
         return this.year;   
     }

     public constructor(name:string, director:string, year:number){
        this.Name = name;
        this.Director = director;
        this.Year = year;
     }

     toString(){
         return `Movie: ${this.Name}, by: ${this.Director}, from ${this.Year}`
     }
}