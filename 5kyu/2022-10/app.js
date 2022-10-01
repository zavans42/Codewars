/* 

### Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Note:
1. If the array of arrays is null/nil or empty, the method should return 0.
2. When an array in the array is null or empty, the method should return 0 too!
3. There will always be a missing element and its length will be always between the given arrays.


### Example

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


### ANSWER

*/

function pigIt(str) {
  const arr = str.split(" ");
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word;
    })
    .join(" ");
}
