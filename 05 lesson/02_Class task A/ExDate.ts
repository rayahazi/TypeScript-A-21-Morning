class ExDate{

    // Properties:

    // Day:
    private _day:number;
    public get Day(){
        return this._day;
    }
    public set Day(day:number){
        if(day >= 1 && day <= 31)
            this._day = day;
    }

    // Month:
    private _month:number;
    public get Month(){
        return this._month;
    }
    public set Month(month:number){
        if(month >= 1 && month <= 12)
            this._month = month;
    }

    // Year: 
    private _year:number;
    public get Year(){
        return this._year;
    }
    public set Year(year:number){
        if(year >= 2000 && year <= 2200)
            this._year = year;
    }

    // Constructor:
    public constructor(year: number, month: number, day:number=1){
        this.Year = year;
        this.Month = month; 
        this.Day = day;
    }

    // toString() function: 3/11/2020
    toString():string{
        return `${this.Day}/${this.Month}/${this.Year}`;
    }
}

