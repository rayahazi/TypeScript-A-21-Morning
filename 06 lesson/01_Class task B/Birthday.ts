class Birthday {

    // day:
    private day:number;
    public set Day(day:number){
        if(day > 0 && day <= 31)
            this.day = day; 
    }
    public get Day(){
        return this.day;   
    }

     // month:
     private month:number;
     public set Month(month:number){
         if(month > 0 && month <= 12)
             this.month = month; 
     }
     public get Month(){
         return this.month;   
     }

     // year:
     private year:number;
     public set Year(year:number){
         if(year > 1000 && year <= 9999)
             this.year = year; 
     }
     public get Year(){
         return this.year;   
     }

    // ctor:
    public constructor(day:number, month:number, year:number){
        this.Day = day;
        this.Month = month;
        this.Year = year;
    }

    toString(){
        return `Birthdate: ${this.day}/${this.month}/${this.year}`
    }
}