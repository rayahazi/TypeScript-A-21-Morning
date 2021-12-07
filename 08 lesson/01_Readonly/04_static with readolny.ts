
// When we have static readonly property - it cannot be assign 
// through the constructor:
class Food{

    // readonly property:
    public static readonly Company;

    public constructor(){
        // Cannot assign to 'Company' because it is a read-only property.
        Food.Company = 'Osem';
    }
  
}

