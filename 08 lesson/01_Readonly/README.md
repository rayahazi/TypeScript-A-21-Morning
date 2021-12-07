# Readonly

readonly - cannot be assigned to. 

* We can add `readonly` to properties inside a class. 
* We can assign value to `readonly` property - only during initializtion / through the constructor (only 1 option). 
* Note: if the property is also `static` - initialization will occur only in the definition line. (not in the constructor). 

### 2 methods to get `readonly`
* We can create `readonly` property by private property who has only `get` method. 
* We can create `readonly` property using the keyword `readonly`. 

### readonly vs const:

1. readonly - is for classes. Const - for regular variables. 
const cannot be used in a class. 
2. readonly properties - do not have to get initial value. const - must get initial value. 


