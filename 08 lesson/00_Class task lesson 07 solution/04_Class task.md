# Class task

#### 1. Create base class `Person`

**Properties:**

- ID (string, can contain only digits, 9 chars length).
- FirstName
- LastName
- Age (0-120)
- IsMale (boolean)
- City

**Methods:**

- toString() - return User description
- fullName() - return the full name for a person.

Full Constructor

#### 2. Create class `Employee` that derives from `Person` class

**Properties:**

- Salary (0-30000)
- HoursPerMonth (0-80)
- startingDate (Date object).

**Methods:**

- toString() - return User description (use override, add details)
- SalaryPerHour() - return salary / HoursPerMonth.

Full Constructor

#### 3. Create class `Disabled` that derives from `User` class

**Properties:**

- typeOfDisability

**Methods:**

- toString() - return User description (use override, add details)

Full Constructor

#### 4. Create class `BusinessOwner` that derives from `User` class

**Properties:**

- Business name
- Category (can be: food, cars, fashion).
- Address (string)

**Methods:**

- toString() - return User description (use override, add details)

Full Constructor

#### 5. Create class `PropertyTax`(ארנונה)

**Properties:**

- taxPrice (0-10000)
- discount precentage for disabled (const variable, will be initialized in the ctor to random number between 10-20)
- discount precentage for business (const variable, will be initialized in the ctor to random number between 20-25)
- discount precentage for worker (const variable, will be initialized in the ctor to random number between 6-10)

**Methods:**

- toString() - return User description (use override, add details)

Full Constructor

### In Main Program

- Create PropertyTax object, and initialize all the data.
- Create an **array** - from Person class, length:10
- Create a **function** that gets the Person array and does not return any value.
  - Send the empty array to the function and put in any cell **randomally** object of: `Worker`, `Disaled`, or `BusinessOwner`.
    The object type will be chosen by random number between 0-2:
    - case number is 0 - put in the call object of: `Worker`
    - case number is 1 - put in the call object of: `Disaled`
    - case number is 2 - put in the call object of: `BusinessOwner`

* Create another **function** that gets the Person array and the PropertyTax object.
  The function will calculate how much is the tax for this array.
  **It will print**
  - The full tax for all the people
  - regular PropertyTax price
  - number of people
  - number of employees
  - number of Disaled
  - number of BusinessOwner
