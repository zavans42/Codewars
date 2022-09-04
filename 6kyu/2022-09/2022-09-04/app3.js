/* 

### CamelCase Method

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
All words must have their first letter capitalized without spaces.

### Example

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/

// ANSWER

String.prototype.camelCase = function () {
  // check if string is empty
  if (this == "") {
    return "";
  }

  let arr = this
    // remove whitespaces for edge cases
    .trim()
    // convert to array
    .split(" ");

  return (
    arr
      // return every word capitalized
      .map((word) => word[0].toUpperCase() + word.slice(1))
      // join the words
      .join("")
  );
};
