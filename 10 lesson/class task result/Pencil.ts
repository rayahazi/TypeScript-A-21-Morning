class Pencil implements IPaint{

    // elements from IPaint interface:
    public color: string;
    isWaterBase(): boolean { return false }

    // company
    public Company:string;

    // size:
    private _size:number;
    public set Size(s:number){
        if(s == 1 || s == 2 || s == 3) this._size = s;
    }
    public get Size(){
        return this._size;   
    }

    // hasEraser:
    public HasEraser:boolean;

    public constructor(c:string,co:string, s:number, h:boolean){
        this.color = c;
        this.Company = co;
        this.HasEraser = h;
        this.Size = s;
    }
    
}