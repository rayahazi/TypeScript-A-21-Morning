class Fruit{

    // This is a regular property - in object level - every object will have diffrent value for that property.
    public Name:string;

    // This is a static property - in class level - all the obejcts will access it the same way (class). 
    public static Country = 'Israel';

    // To access object level property - we must add prefix - `this`
    // To access class level property - we must add prefix - `Class name`
    toString(){
        return `Fruit: ${this.Name}, from: ${Fruit.Country}`;
    }

}