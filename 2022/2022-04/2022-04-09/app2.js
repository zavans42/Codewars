/* CHALLENGE

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

*/


/* EXAMPLE

goals(0,0,0) // 0
goals(43, 10, 5) // 58

*/

// ANSWER


const goals = (...arr) => arr.reduce((a, b) => a + b, 0)