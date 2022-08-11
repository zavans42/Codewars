/* 

### CHALLENGE

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

### EXAMPLE

"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"


*/

// ANSWER

var isAnagram = function (test, original) {

    const sortedTest = test.toLowerCase().split('').sort().join('');
    const sortedOriginal = original.toLowerCase().split('').sort().join('');

    return sortedTest === sortedOriginal ? true : false;

};