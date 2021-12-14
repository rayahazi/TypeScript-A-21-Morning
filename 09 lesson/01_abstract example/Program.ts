// We cannot create object from parent-class Person - abstract

// let p1 = new Person('gdg','fds',34);

let arr:Person[] = [
    new Student('x', '456', 23, 100),
    new Teacher('y', '324', 45, 40)
];

for (const person of arr) {
    console.log(person.toString());
}