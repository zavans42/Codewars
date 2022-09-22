/* 

### Pyramid Array

Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

### Example

presses("LOL") // 9, "should work for simple examples"
presses("HOW R U") // 13, "should work for phrases with spaces"


### ANSWER

*/

function presses(phrase) {
  let keyPressed = phrase
    .replace(/(s|z|[2-6]|8)/gi, "4")
    .replace(/(a|d|g|j|m|p|t|w|\*|\s|\#)/gi, "1")
    .replace(/(b|e|h|k|n|q|u|x|0)/gi, "2")
    .replace(/(c|f|i|l|o|r|v|y)/gi, "3");

  return Array.from(keyPressed, Number).reduce((pr, cr) => pr + cr, 0);
}
