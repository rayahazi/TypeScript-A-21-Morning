# OOP - Object Oriented Programming

OOP is about creating objects that contain both data & functions.

> The main goal of OOP - is to simulate the real world objects. for example: Fruits, Cars, People...

### Why use OOP?

- OOP is faster and easier to execute.
- OOP provides a clear structure for the program.
- OOP helps with `DRP`(Don't repeat yourself) - write once, use anywhere.

### Class

We use classes to create a template (תבנית) for objects.

- Class does not take place in memory

* An `Object` - is an instance of a class.

* When object is created, it inherits all the properties and methods of the class.

### Constructor

```ts
public constructor(){
}
```

- The constructor can initialize the `properties` when object is created.
- Every time we create an object - it's first action will be to call the constructor
- constructors will always run when we create an object
- When we create a constructor it will override the default constructor.
- constructor cannot return any value. (not even void).
- constructor can get parameters.

> In TypeScript(and JS) - we can create only 1 constructor. To make it dynamic (so each time it will be able to get diffrent parameters) - we use optional parameters syntax (by `?`).
> For example:

```ts
public constructor(name?:string, age?:number){
        this.name = name;
        this.age  = age;
}
```

### Encapsulation

The meaning of `Encapsulation` is to make sure that sensitive data is hidden from users.
To achieve this:

1. Declare properties as **private**
2. Provide **public** **get** and **set** methods, to access and to update the value of the private properties.

> **private** properties will always start with lowercase, and usually with `_`

> **public** properties will always start with uppercase

##### Access modifiers - הרשאות גישה

- **private** - the code will be accessible only within the same class
- **public** - the code will be accessible to all classes

##### Why Encapsulation?

- Better control of class members.
- Fields can be made **read-only**(use of `get` method only), or **write-only**(use of `set` method only)
- Flexible - the programmer can change 1 part of the code without affecting other parts.
- Security - increased. Users can access only what we allow to them.
- Validation check: before we insert data to a property - we can check it - using **\*set** method.

#### Terms - מונחים

- OOP - תכנות מונחה עצמים
- Class - מחלקה
- Instance - מופע של מחלקה
- Properties - מאפיינים
- Methods - פעולות (פונקציות)
- Constructor - בנאי
- Encapsulation - כימוס
