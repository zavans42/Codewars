/* );

ROT13
Tags: STRINGS, CIPHERS, REGULAR EXPRESSIONS, ALGORITHMS

1. DESCRIPTION

How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

2. EXAMPLE

"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"

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
