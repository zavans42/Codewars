/* 

### Decode the Morse code

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.


### Example

If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.

*/

// ANSWER

const decodeMorse = (morseCode) => {
  const separateByWords = morseCode
    //remove the whitespaces
    .trim()
    //separate by each word
    .split("   ");

  const separateByChar = separateByWords
    // separate by each character
    .map((x) =>
      x
        .split(" ")
        // decode each morse code char into english
        .map((x) => MORSE_CODE[x])
        // join each card into word
        .join("")
    )
    // join each word into sentences
    .join(" ");

  return separateByChar;
};
