/* 

### Reverse every other word in the string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


### Example

reverse("Reverse this string, please!") // "Reverse siht string, !esaelp"
reverse("I really don't like reversing strings!") //"I yllaer don't ekil reversing !sgnirts"


### ANSWER

*/

function reverse(str) {
  if (!/\w/g.test(str)) {
    return "";
  }

  return str
    .split(" ")
    .map((word, i) => (!!(i % 2) ? word.split("").reverse().join("") : word))
    .join(" ");
}
