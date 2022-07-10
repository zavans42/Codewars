/* CHALLENGE

We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.

Note: The parameter is optional. So you have to give it a default value.
*/


/* EXAMPLE

arr(5) // => [0,1,2,3,4]

*/

// ANSWER

// Sum Numbers
const arr = N => N ? [...Array(N).keys()] : []