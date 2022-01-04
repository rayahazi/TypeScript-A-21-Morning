## const var let

- var was the only value for any value in JS, until ES6.
- const and let were added in the last version of JS - ES6.

##### var - variable

Var is not used today. Var is globally scoped.

##### let - block scoped

let is only recognized in it's block (inside the `{}`). Let can be reassigned

##### const - constant (קבוע)

const is blocked scope, and cannot be changed (immutable) .

### Differences

<table border="1">
<tr>
    <th></th>
    <th>let</th>
    <th>var</th>
    <th>const</th>
</tr>

<tr>
    <th>redeclare</th>
    <td>no</td>
    <td>yes</td>
    <td>no</td>
</tr>

<tr>
    <th>reassign</th>
    <td>yes</td>
    <td>yes</td>
    <td>no</td>
</tr>

<tr>
    <th>block scope - {}</th>
    <td>yes</td>
    <td>no</td>
    <td>yes</td>
</tr>
</table>
