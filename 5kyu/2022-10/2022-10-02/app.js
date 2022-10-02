/* 

### The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.


### Example

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false


### ANSWER

*/

function generateHashtag(str) {
  let hashtag = str
    // all words must have their first letter capitalized
    .replace(/\b\w/g, (first) => first.toUpperCase())
    // remove whitespaces between words
    .replace(/\s+/g, "")
    // it must start with a hashtag (#)
    .replace(/^(\w)/, "#$1");

  // if the hashtag is longer than 140 chars or is an empty string it must return false.
  return hashtag.length > 140 || !/\w/.test(str) ? false : hashtag;
}
