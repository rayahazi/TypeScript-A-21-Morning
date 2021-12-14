# Class task abstract and polymorphism

- All the properties are in propfull. add conditions.
- Each class should contain: constructor, toString().

There is a travel guides company "Travel with me", who wants you to develop a systym for the company's employees.

### Write an abstract class: `TravelEmployee`

- Properties:
  - name
  - age
  - ID
- metohds:
  - CalculateSalary() - calculates and returns the employee's salary after every trip.
  - ContinueToNextTrip() - returns whether the employee will continue to the next trip

### Write classes that extend the class `TravelEmployee`. (use get and set)

1. FamilyGuide (with property: numOfKids. Must be above 3)
2. CityGuide (with property: cityName. (can be only: London, Paris or Jerusalem), and numOfLocations)
3. FoodGuide (with property: numOfRestaurants. must be above 2 and under 10)

### Implement the abstract method `CalculateSalary()`:

1. FamilyGuide - numOfKids \* 300
2. CityGuide - numOfLocations \* 150
3. FoodGuide - numOfRestaurants \* 100

### Implement the abstract method `ContinueToNextTrip()`, that decides which guide to take next:

1. FamilyGuide - if kids are above 5.
2. CityGuide - if numOfLocations are above 3
3. FoodGuide - if numOfRestaurants are above 2

### Write a class `TravelGuide`

- Properties:
  - array of 30 employees
- metohds:
  - AddEmployee() - gets an object, and adds it to the array. If full - return false. else - return true.
  - CalculateTotalSalary() - returns the total salary for all employees
  - FamilySalaryPercent() - returns the salary percent for FamilyGuides
  - NoOfEmployeesForNextTrip() - returns the number of employees that continue to the next trip.

## In main:

* Create one employee for each type. 
* Create one `TravelGuide` object, and adds the employees.
* Print the employees total salary. 
* Print the salary percent for FamilyGuides
* Print the number of employees that continue to the next trip.
