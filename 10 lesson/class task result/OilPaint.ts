class OilPaint implements IPaint{

    // elements from IPaint interface:
    public color: string;
    isWaterBase(): boolean { return true }

    // year:
    public Price:number;

    // size:
    private _quality:string;
    public set Quality(q:string){
        if(q == 'low' || q == 'medium' || q == 'high') this._quality = q;
    }
    public get Quality(){
        return this._quality;   
    }

    public constructor(c:string,p:number, q:string){
        this.color = c;
        this.Price = p;
        this.Quality = q;
    }
    
}