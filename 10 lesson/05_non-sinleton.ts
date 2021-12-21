// we want to have 1 place that contains all the students list. 
class UniversityInfo{
    public VisitorsList: string[] = [];
}

console.log("A student enters the university...");

let s1 = new UniversityInfo();
s1.VisitorsList.push('student1');

console.log("Another student wants to enter...");
let s2 = new UniversityInfo();
s2.VisitorsList.push('student2');

// There is a problem here: 
// we can create more than 1 time an object of class `UniversityInfo`. 
// there are duplicated values.. 
