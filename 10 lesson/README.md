# Interface - חוזה, ממשק

In the interface we define the contract - methods that must be implemented in each class that uses that interface.

- Interface must start with `I`. For example: `IAction`, `IDisposable`.
- Inside the interface: We can create both properties & methods. (for methods - only the method structure).

#### class vs interface:

- class can inherit only one class.

```ts
class A {}
class B extends A {}
class C extends B {}
```

- not valid:

```ts
class A {}
class B {}
class C extends A, B  {} // error!!
```

- interface can be implemented in a class more than one time.

```ts
interface A {}
interface B {}

class myClass implements A, B {}
```

### Application to detect objects in the road:

**Common action:**

- move left
- move right

**Objects:**

- car
- adults
- kids
- animals
- ball
