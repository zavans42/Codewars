/* 

### First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


### Example

firstNonRepeatingLetter('a'), 'a'
firstNonRepeatingLetter('stress'), 't'
firstNonRepeatingLetter('moonmen'), 'e'


### ANSWER

*/

function firstNonRepeatingLetter(s) {
  let moon = s
    .split("")
    .map((letter) => {
      // resolve edge cases with odd character
      if (/\W/.test(letter)) {
        letter = `\\${letter}`;
      }

      // find all non-repeating character
      const re = new RegExp(`(?<!${letter}.*)(${letter})(?!.*${letter})`, "i");
      return s.match(re);
    }) // ger rid of the nulls
    .filter((x) => x != null);

  // return the first non-repeating character
  return moon.length < 1 ? "" : moon[0][0];
}
