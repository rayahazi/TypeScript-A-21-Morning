## Class task


#### Create an interface `IPaint`

methods:

1. color(property) - gets color as parameter.
2. isWaterBase() - return boolean value

### Create the classes who implement `IPaint`

#### A. Pencil

properties:

- company
- size (1, 2, 3)
- hasEraser - boolean

#### B. Pen

properties:

- size (0.4, 0.5, 0.7)
- year
- type (gel, ink, brush)

#### C. OilPaints

properties:

- Price
- quality (low, medium, high)

### In main:

- Create a function `CreatePaints` that returns an object of `IPaint`. The function will use random number 0-2:

  - if number = 0: return pencil object
  - if number = 1: return pen object
  - if number = 2: return OilPaints object

- Create an array with 10 cells of `IPaint`.
- Initialize each cell using `CreatePaints()` function
- For each cell in the array - call the 2 functions from the interface.
