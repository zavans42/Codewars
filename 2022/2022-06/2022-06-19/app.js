/* 

# CHALLENGE

Complete the square sum function so that it squares each number passed into it and then sums the results together.

# EXAMPLE

squareSum([1,2]) // 5)
squareSum([0, 3, 4, 5]) // 50)
squareSum([]) // 0)

*/

// ANSWER

const squareSum = arr => arr.map(x => x ** 2).reduce((a, b) => a + b, 0)