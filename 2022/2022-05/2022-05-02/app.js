/* CHALLENGE

You get an array of numbers, return the sum of all of the positives ones.

Note: if there is nothing to sum, the sum is default to 0.

*/

/* EXAMPLE

positiveSum([1,2,3,4,5]) // 15
positiveSum([1,-2,3,4,5]) // 13
positiveSum([]) // 0
positiveSum([-1,-2,-3,-4,-5]) // 0
positiveSum([-1,2,3,4,-5]) // 9

*/

// ANSWER

const positiveSum = arr => arr.filter(x => x > 0).reduce((a, b) => a + b, 0)