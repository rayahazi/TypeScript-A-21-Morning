# Inheritace:

### Basic inheritance:

```ts
class A {}

class B extends A {}
class C extends A {}
```

### Ctor only in parent class

When we create new object from sub-class(B), the ctor of parent-class(A) will always run.

```ts
class A {
  constructor() {
    console.log("I am class A");
  }
}

class B extends A {}

let b = new B(); // I am class A
```

### Ctor in both classes (Without parameters)

The ctor of parent class(A) will run first, because we put `super()` function first in the constructor of B class.

```ts
class A {
  constructor() {
    console.log("I am class A");
  }
}

class B extends A {
  constructor() {
    super();
    console.log("I am class B");
  }
}

let b = new B();
// I am class A
// I am class B
```

### Ctor in both classes (With parameters)

When adding parameters to ctor - we will send them to parent class using `super()` function.

```ts
class A {
  constructor(num: number) {
    console.log(`I am class A. number = ${num}`);
  }
}

class B extends A {
  constructor(name: string, num: number) {
    super(num);
    console.log(`I am class B. Name = ${name}`);
  }
}

let b = new B("Alex", 5);
/*
I am class A. number = 5
I am class B. Name = Alex
*/
```
