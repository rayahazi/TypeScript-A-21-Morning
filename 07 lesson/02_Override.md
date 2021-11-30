# Override - לדרוס

### basic override:

```ts
class A {
  sayMyName(): string {
    return "I am class A";
  }
}

class B extends A {
  sayMyName(): string {
    return "I am class B";
  }
}

let a1: A = new A();
console.log(a1.sayMyName()); // I am class A

let a2: B = new B();
console.log(a2.sayMyName()); // I am class B
```
