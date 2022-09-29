/* 

### Bracket Duplicates

Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.


### Example

stringParse("aaaabbcdefffffffg"), "aa[aa]bbcdeff[fffff]g"
stringParse("boopdedoop"), "boopdedoop"
stringParse("helloookat"), "helloo[o]kat"


### ANSWER

*/

function stringParse(string) {
  if (typeof string !== "string") {
    return "Please enter a valid string";
  }
  return string.replace(/((.)\2)(\2+)/g, "$1[$3]");
}
