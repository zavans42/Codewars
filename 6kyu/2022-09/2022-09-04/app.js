/* 

### Which are in?

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Notes:
> Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
> In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
> Beware: r must be without duplicates.

### Example

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

*/

// ANSWER

function inArray(array1, array2) {
  let arr = [];

  for (let word of array1) {
    for (let moreword of array2) {
      if (moreword.includes(word)) {
        arr.push(word);
      }
    }
  }

  return [...new Set(arr)].sort();
}
