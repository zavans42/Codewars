/* CHALLENGE

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

*/

/* EXAMPLE

grow([1, 2, 3]) // 6
grow([4, 1, 1, 1, 4]) // 16 
grow([2, 2, 2, 2, 2, 2]) // 64 

*/

// ANSWER

function grow(x) {

    // get the value of each element from the array and multiply each by next element
    return x.reduce((n1, n2) => n1 * n2, 1)

}