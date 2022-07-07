/* CHALLENGE

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

*/

/* EXAMPLE

capitalizeWord('word') // 'Word'
capitalizeWord('i') // 'I'
capitalizeWord('glasswear') // 'Glasswear'

*/

// ANSWER

function capitalizeWord(word) {
    const wordSplit = word.split('')
    const capitalizeLetter = wordSplit[0].toUpperCase()

    return capitalizeLetter + word.slice(1)
}