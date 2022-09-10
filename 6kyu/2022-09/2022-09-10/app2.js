/* 

### Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
    - The first letter must be converted to its ASCII code.
    - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

### Example

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"


*/

// ANSWER

var encryptThis = function (text) {
  let arr = text.split(" ");

  return arr
    .map((word) => {
      let encrypted = word.charCodeAt(0); // ASCII code from the first letter

      switch (true) {
        case word.length === 2:
          encrypted += word[1];
          break;
        case word.length > 2:
          encrypted += word[word.length - 1] + word.slice(2, -1) + word[1]; // The second letter switched with the last letter
          break;
      }

      return encrypted;
    })
    .join(" ");
};
