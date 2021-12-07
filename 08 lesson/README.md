# 1. Class task enum

1. Create enum **Level** with 3 levels:
   High, Medium, Low

2. Create enum **Category** with 5 categories:
   Fantasy, History, Kids, Drama, Newspaper

3. Create class `Book`

   - Attributes: Name(string), PagesAmount(int), BookCategory(Category), Popularity(Level)
   - Full constructor
   - Methods:
     1. `ReadBook()`: that retuens string with the name of the book, "I read the book .."
     2. `toString()` that returns full description of attributes.

4. Create 3 Instances in an array in main program. Fill the data correspondly.

5. create `foreach` loop that runs on every element and prints the toString()

6. create `Switch-case` loop to check popularity of each book:
   - If popularity is high- prints "Book is not available today"
   - If popularity is medium- prints "Please buy another version of this book"
   - If popularity is low- prints "Enjoy this book"

# 2. Class task multilevel inheritance

#### 1. Create base class `Animal`

**Properties:**

- Age (0-100)
- NumOfLegs:number. (0-10).

**Methods:**

- CanWalk() - if the mammal has more than 1 leg - return a string that will print: "the animal can walk on land"
- toString() - return User description

Full Constructor

#### 2. Create sub class `Mamal`, extends from `Animal`

**Properties:**

- Static readonly property : WarnBlooded = true;
- hairColor:string.
- babyWeight:string. (in kg).

**Methods:**

- toString() - return full description

Full Constructor

#### 3. Create sub class `Reptiles`, extends from `Animal`

**Properties:**

- Static readonly property : WarnBlooded = false;
- hasSkales:boolean
- numOfEggsPerYear:number

**Methods:**

- toString() - return full description

Full Constructor

#### 4. Create sub class `Human`, extends from `Mammal`

**Properties:**

- fullName:string
- ID:string
- isMale:boolean
- country:string

**Methods:**

- toString() - return full description

Full Constructor

#### 5. Create sub class `Dolphin`, extends from `Mammal`

**Properties:**

- BodyColor:string
- MainVowel:String
- SeaName:string

**Methods:**

- toString() - return full description

Full Constructor

#### 6. Create sub class `Turtle`, extends from `Reptiles`

**Properties:**

- IsSeaTurtle:boolean
- backPattern:string(can be: dottes, none, lines)
- MainFood:array of 3 strings.

**Methods:**

- toString() - return full description

Full Constructor

#### 7. Create sub class `Snale`, extends from `Reptiles`

**Properties:**

- Name:string
- Length:number
- PopularInCountry:string

**Methods:**

- toString() - return full description

Full Constructor

#### 8. In program.ts

- Create an array of 8 objects. 2 from each class:
  - humans
  - snakes
  - dolphines
  - turtles
- Print all their data using for-loop, and call toString() method.

- Create a diagram - that show all the relationships between the classes.
