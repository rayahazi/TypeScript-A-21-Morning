class Address {

    // houseNum:
    private houseNum:number;
    public set HouseNum(houseNum:number){
        if(houseNum >= 0)
            this.houseNum = houseNum; 
    }
    public get HouseNum(){
        return this.houseNum;   
    }

    // street:
    private street:string;
    public set Street(street:string){
        this.street = street; 
    }
    public get Street(){
        return this.street;   
    }

    // city:
    private city:string;
    public set City(city:string){
        this.city = city; 
    }
    public get City(){
        return this.city;   
    }

    // country:
    private country:string;
    public set Country(country:string){
        if(country == 'Israel' || country == 'France' || country == 'Italy')
            this.country = country; 
    }
    public get Country(){
        return this.country;   
    }

    // ctor:
    public constructor(houseNum:number, street:string, city:string, country:string){
        this.HouseNum = houseNum;
        this.Street = street;
        this.City = city;
        this.Country = country;
    }

    toString(){
        return `Address: ${this.Country}: ${this.City}, 
        street ${this.Street}, houseNumber: ${this.HouseNum}`
    }
}