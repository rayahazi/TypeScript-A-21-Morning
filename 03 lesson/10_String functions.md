# String - מחרוזת

> ASCII table is a code to repsent chars in the memory of the computer.
> Every char that we write, will be in memory in it's ascii Binary value

<img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg">

String is an object (a reference type)

> `\n` - next line. `\t` - tab

1. length - return the length of a string

```js
str.length;
```

2. Retrieve a specific string character
   (We can use strings as we use arrays).

```js
str[0];
```

3. Retrieve the last char in a string

```js
str[str.length - 1];
```

4. IndexOf()
   Returns the position of the first occurrence of a substring.

```js
var str = "I use chrome browser";

console.log(str.indexOf("chrome")); //--> 6

// if substing isn't in the string, the output is `-1`
console.log(str.indexOf("hello")); //--> -1
```

5. Slice() - The index to the beginning of the specified portion of stringObj.

```js
str.slice(0, 4);
```

6. toLowerCase() - Converts all the alphabetic characters in a string to lowercase.

```js
str.toLowerCase();
```

7. toUpperCase() - Converts all the alphabetic characters in a string to uppercase.

```js
str.toUpperCase();
```

8. Replace - Replaces text in a string, using a regular expression or search string.

```js
str.replace(stringToChange, newString);
```
