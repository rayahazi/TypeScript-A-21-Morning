// The second way we can get a readonly property
// Use the keyword - readonly

class Computer{

    // readonly property:
    public readonly Company;

    // We can define value: initializion line/ constructor:
    public constructor(){
        this.Company = 'Dell';
    }
  
}

let c1 = new Computer();
// Cannot assign to 'Company' because it is a read-only property.
// c1.Company = 'Apple';

