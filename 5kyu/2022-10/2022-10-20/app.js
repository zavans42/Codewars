/* );

Word Finder
Tags: STRINGS, REGULAR EXPRESSIONS, FILTERING, ALGORITHMS

1. DESCRIPTION

In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.

2. EXAMPLE

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']

Additional Notes:
- the words and patterns are all lowercase
- the order of the returned words doesn't matter


*/

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  pattern = pattern.replace(/\?/g, ".");
  const re = new RegExp(`^${pattern}$`);

  return this.words.filter((x) => re.test(x));
};
