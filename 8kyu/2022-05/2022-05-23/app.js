/* CHALLENGE

Complete the function that takes two integers (a, b, where a < b) and return an 
array of all integers between the input parameters, including them.

*/

/* EXAMPLE

between(1, 4) // [1, 2, 3, 4]
between(-2, 2) // [-2, -1, 0, 1, 2]

*/

// ANSWER

function between(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}