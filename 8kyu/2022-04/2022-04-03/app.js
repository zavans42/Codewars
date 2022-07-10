/* CHALLENGE

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/


/* EXAMPLE

arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // 21
arrayPlusArray([0, 0, 0], [4, 5, 6]) // 15
arrayPlusArray([100, 200, 300], [400, 500, 600]) // 2100

*/

// ANSWER

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a, b) => a + b, 0)
}