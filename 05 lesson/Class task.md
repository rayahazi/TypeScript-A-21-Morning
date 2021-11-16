# Class task

## A. Food with expiration date

##### Class ExDate

properties - with full getter and setter, and validation check in the setter.

- day :number
- month :number
- year :number

methods -

- toString() - return all the properties of the class

constructor - full (with optional parameter for day)

##### Class Food

properties - with full getter and setter, and validation check in the setter.

- foodName : string
- lastDate : ExDate

methods -

- toString() - return all the properties of the class

constructor - full

##### Class Program

- Creates an array of 5 food objects with full data.
- Send their data to the html file.

#### index.html - HTML page

- Create html page, and show the 4 objects with full data in a table.
  > Note: All all the js files to the script tag in html.

### B. People - Address + Profession + Birthday

**Address class:**

- Properties:
  - house number (can be only positive number)
  - street
  - city
  - country (can be only Israel, France or Italy)
- Methods:
  - full constructor
  - toString() - returns all the object's details.

**Profession class:**

- Properties:
  - name
  - HoursPerMonth (must be number between 0-80)
  - salary (must be number between 0-100000)
- Methods:
  - full constructor
  - toString() - returns all the object's details.

**Birthday class:**

- Properties:
  - day (must be positive number between 1-31)
  - month (must be positive number between 1-12)
  - year (must be positive number between 1000-9999)
- Methods:
  - full constructor
  - toString() - returns all the object's details.

**Main class:**

- Create an array of 5 people with full details.
- print the info for all the people.

### C. cinema ststem - Advanced

- In the cinema we have 8 halls.
- In each hall we have diffrent movie.
- The cinema has 80 movies.
- For each movie - we have name + year + director
- In each hall we have 8 rows and in each row - 6 seats.
- Ordering tickets system: the users can order tickets. (with details: number of tickets and the movie's name)
  If there is a place in the hall: The system will fill the seats in the wanted hall.
  Else - will return false message.
- We want to be able to see all the details. (all the halls - for each hall - the movie details + seats(as matrix)).

### Goodluck!
