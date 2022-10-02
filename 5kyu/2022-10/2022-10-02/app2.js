/* 

### String incrementer

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.


### Example

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


### ANSWER

*/

function incrementString(str) {
  return (
    str
      // if the string already ends with a number, the number should be incremented by 1.
      .replace(/[0-8]\b|\d9+/g, (num) => +num + 1)
      // if the string does not end with a number, the number 1 should be appended to the new string.
      .replace(/([a-z])$/i, "$11")
  );
}
