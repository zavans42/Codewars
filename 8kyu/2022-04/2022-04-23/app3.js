/* CHALLENGE

Complete the solution so that it reverses the string passed into it.

*/

/* EXAMPLE

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

// ANSWER

function solution(str) {
    return str.split('').reverse().join('');
}