class CPU{

    // Properties: 
    public serialNumber: number;
    public numOfCores: number;
    public company: string;
    public price: number;

    toString():string{
        return `CPU from: ${this.company} company, 
        serialNumber: ${this.serialNumber}, has ${this.numOfCores} cores, 
        and consts: ${this.price}`;
    }
}