/* CHALLENGE

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

*/

/* EXAMPLE

contamination("abc","z") // "zzz"
contamination("","z") // ""
contamination("abc","") // ""
contamination("_3ebzgh4","&") // "&&&&&&&&"
contamination("//case"," ") // "      "

*/

// ANSWER

function contamination(text, char) {
    if (!text) {
        return text
    } else {
        return text.split('').map(x => char).join('')
    }
}