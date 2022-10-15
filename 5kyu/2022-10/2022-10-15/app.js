/* );

Regex Password Validation
Tags: REGULAR EXPRESSIONS, FUNDAMENTALS

1. DESCRIPTION

You need to write regex that will validate a password to make sure it meets the following criteria:
- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
- only contains alphanumeric characters (note that '_' is not alphanumeric)

2. EXAMPLE

fjd3IR9 // true
ghdfj32 // false
DSJKHD23 // false
dsF43 // false
4fdg5Fj3 // true
DHSJdhjsU // false
fjd3IR9.; // false
fjd3  IR9 // false
djI38D55 // true
djI3_8D55 // false
djI38D55@@ // false

*/

const REGEXP = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// OTHER SOLUTION

function validate(password) {
  if (password.length < 6) return false;
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var index = [-1, -1, -1];
  for (i = 0; i < password.length; i++) {
    if (lowerCase.indexOf(password.charAt(i)) >= 0) {
      index[0] = lowerCase.indexOf(password.charAt(i));
    } else {
      if (upperCase.indexOf(password.charAt(i)) >= 0) {
        index[1] = upperCase.indexOf(password.charAt(i));
      } else {
        if (number.indexOf(password.charAt(i)) >= 0) {
          index[2] = number.indexOf(password.charAt(i));
        } else return false;
      }
    }
  }
  if (index[0] === -1 || index[1] === -1 || index[2] === -1) {
    return false;
  }
  return true;
}
