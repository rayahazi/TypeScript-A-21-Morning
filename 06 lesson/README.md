# Static keyword

The static keyword allow us to define properties or methods in class level. (not in object level).

- In TypeScript we can use the static keyword on: properties and methods.

#### Object level properties - called by `this` keyword

```ts
class Fruit {
  // This is a regular property - in object level - every object will have diffrent value for that property.
  public Name: string;

  // To access object level property - we must add prefix - `this`
  toString(): string {
    return `Fruit: ${this.Name}`;
  }
}
```

#### Class level properties - called by `className` prefix

```ts
class Fruit {
  // This is a static property - in class level - all the obejcts will access it the same way (class).
  public static Country = "Israel";

  // To access class level property - we must add prefix - `Class name`
  toString() {
    return `Fruit from: ${Fruit.Country}`;
  }
}
```
