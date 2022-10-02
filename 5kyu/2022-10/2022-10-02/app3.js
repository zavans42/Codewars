/* 

### Valid Parentheses

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.


### Example

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


### ANSWER

*/

function validParentheses(parens) {
  // check if there still valid parentheses left
  while (/\(\)/.test(parens)) {
    parens = parens.replace(/\(\)/, "");
  }

  return !parens;
}
