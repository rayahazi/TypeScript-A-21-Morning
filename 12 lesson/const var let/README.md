# var const let

- var - was the only type for any value until ES6 version of JavaScript.
- const and let were added in the last version - ES6.

<table border=1>
    <tr>
        <th></th>
        <th>var</th>
        <th>let</th>
        <th>const</th>
    </tr>
    <tr>
        <th>empty init</th>
        <td>yes</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <th>redeclare</th>
        <td>yes</td>
        <td>no</td>
        <td>no</td>
    </tr>
    <tr>
        <th>reassign</th>
        <td>yes</td>
        <td>yes</td>
        <td>no</td>
    </tr>
    <tr>
        <th>block scope-{}</th>
        <td>no</td>
        <td>yes</td>
        <td>yes</td>
    </tr>
</table>

##### var - variable

var is not in a use anymore. (old version). Var is globally scoped.

##### let - block scoped

let is only recognized in the block scope - `{}`. Let can be reassigned.

##### const - constant (קבוע)

const is blocked scope, cannot be changed (immutable), and must have value in initializion line.

### with OOP

Important note: we do not use const var and let with classes.

- in class - we use only `private` and `public` .
