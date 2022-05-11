/* CHALLENGE

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

*/

/* EXAMPLE

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

*/

// ANSWER

function stringy(size) {

    return (Array.from(Array(size).keys()).map(x => x % 2 === 0 ? x = 1 : x = 0)).join('')

}