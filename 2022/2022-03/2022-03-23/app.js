/* CHALLENGE

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

*/

/* EXAMPLE

divisibleBy([1,2,3,4,5,6], 2) // [2,4,6]
divisibleBy([1,2,3,4,5,6], 3) // [3,6]
divisibleBy([0,1,2,3,4,5,6], 4) // [0,4]
divisibleBy([0], 4) // [0]
divisibleBy([1,3,5], 2) // []

*/

// ANSWER

const divisibleBy = (arr,n) => arr.filter(x => x % n === 0)