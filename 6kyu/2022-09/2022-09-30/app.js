/* 

### If you can read this...

You'll have to translate a string to Pilot's alphabet

Note:
- There are preloaded dictionary you can use, named NATO
- The set of used punctuation is ,.!?.
- Punctuation should be kept in your return string, but spaces should not.
- Xray should not have a dash within.
- Every word and punctuation mark should be seperated by a space ' '.
- There should be no trailing whitespace


### Example

Input:
If, you can read?

Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?


### ANSWER

*/

function to_nato(words) {
  return (
    words
      // every word and punctuation mark should be seperated by a space ' '.
      .replace(/\w/g, (letter) => `${NATO[letter.toLowerCase()]} `)
      .replace(/[,.!?]/g, (punc) => `${punc} `)
      // there should be no trailing whitespace
      .replace(/.$|(?<=\s)\s/g, "")
  );
}
