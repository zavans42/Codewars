/* 

### Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


### Example

"test" // "grfg"
"Test" // "Grfg"


### ANSWER

*/

function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) => {
    let shiftBy13 = String.fromCharCode(letter.charCodeAt(0) + 13);
    let shiftBy13alt = String.fromCharCode(letter.charCodeAt(0) + 13 - 26);

    let re;
    /[a-z]/.test(letter) ? (re = /[a-z]/) : (re = /[A-Z]/);

    // shift the letter by 13 if it's same type as before ie: uppercase still uppercase
    // otherwise reduce the charcode by 26 to avoid non alphabet character
    if (re.test(letter)) {
      return re.test(shiftBy13) ? shiftBy13 : shiftBy13alt;
    }
  });
}
