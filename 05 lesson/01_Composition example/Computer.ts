// Computer has a CPU
class Computer{

    // Properties:
    public company:string;
    public price:number;

    // This property has a type of another class we created - CPU
    public cpu:CPU;

    toString():string{
        return `Computer from ${this.company}, costs: ${this.price}, 
        and its processor: ${this.cpu.toString()}`;
    }
}
