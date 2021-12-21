// we want to have 1 place that contains all the students list. 
class UniversityInfo{
    // private constructor - always in singleton. 
    // we cannot create objects outside the class
    private constructor(){};

    // create only 1 instance *inside* the class:
    private static instance: UniversityInfo = new UniversityInfo();
    public static Instance():UniversityInfo{
        return UniversityInfo.instance;
    }

    // visitors array:
    public VisitorsList: string[] = [];

}

console.log("A student enters the university...");

// we can create as many instances as we want, 
// but they will always use the same object (address). 
let s1:UniversityInfo =  UniversityInfo.Instance();
s1.VisitorsList.push('student1');

console.log("Another student wants to enter...");
let s2:UniversityInfo =  UniversityInfo.Instance();
s2.VisitorsList.push('student2');

