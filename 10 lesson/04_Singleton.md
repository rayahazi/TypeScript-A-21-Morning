# Singleton in TypeScript - design pattern

- Singleton is a Creational pattern

There is only 1 instance for a class.

- Math is a singleton library. (in CSharp). We do not want to create objects of class Math, but only to use it's functions.

#### Create a singleton:

1. private constructor
2. 1 property that is an obejct of the class. (static, readonly). 
3. When we create objects - they will always go to the object we created. 