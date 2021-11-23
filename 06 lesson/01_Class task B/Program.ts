let myPeople: Person[] = [
    new Person('Alex', new Birthday(1, 4, 1993), 
        new Address(45, 'aaa', 'Ariel', 'Israel'), new Profession('teacher', 40, 10000)), 
    new Person('Bracha', new Birthday(2, 5, 1995), 
        new Address(45, 'aaa', 'Ariel', 'Israel'), new Profession('teacher', 40, 10000))
];

for (const person of myPeople) {
    console.log(person.toString());
}