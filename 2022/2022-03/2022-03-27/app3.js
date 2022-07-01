/* CHALLENGE

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

/* EXAMPLE

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
// 'b***i***t***c***o***i***n'

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) // 'a***r***e')

*/

// ANSWER

twoSort = arr => arr.sort()[0].split('').join('***')