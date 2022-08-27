/* 

### Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

### Example

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

*/

// ANSWER

function findMissingLetter(array) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // check if the letter if upper or lowercase
    if (array[0] !== array[0].toLowerCase()) {
        alphabet = alphabet.map(x => x.toUpperCase())
    }

    // array of the indexes
    let arr = array.map(x => alphabet.indexOf(x))


    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) {
            return alphabet[arr[i] - 1];
        }
    }

}