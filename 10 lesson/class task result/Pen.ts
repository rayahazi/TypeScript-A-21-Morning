class Pen implements IPaint{

    // elements from IPaint interface:
    public color: string;
    isWaterBase(): boolean { return true }

    // year:
    public Year:number;

    // size:
    private _size:number;
    public set Size(s:number){
        if(s == 0.4 || s == 0.5 || s == 0.7) this._size = s;
    }
    public get Size(){
        return this._size;   
    }

    // type:
    private _ptype:string;
    public set PType(t:string){
        if(t == 'gel' || t == 'ink' || t == 'brush') this._ptype = t;
    }
    public get PType(){
        return this._ptype;   
    }

    public constructor(c:string,y:number, s:number, t:string){
        this.color = c;
        this.Year = y;
        this.PType = t;
        this.Size = s;
    }
    
}