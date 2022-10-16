/* );

Convert PascalCase string into snake_case
Tags: STRINGS, ALGORITHMS

1. DESCRIPTION

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

2. EXAMPLE

"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

*/

function toUnderscore(string) {
  // if the method gets a number as input, it should return a string.
  if (typeof string !== "string") {
    return `${string}`;
  }

  return (
    string
      // convert starting letter to lowercase letter
      .replace(/^[A-Z]/, (x) => x.toLowerCase())
      // adds underscores before uppercase letter
      .replace(/([A-Z])/g, (x) => `_${x.toLowerCase()}`)
  );
}
