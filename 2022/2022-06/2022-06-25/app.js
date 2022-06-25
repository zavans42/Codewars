/* 

# CHALLENGE

Implement a function which multiplies two numbers.

# EXAMPLE

multiply(2, 3), 6

*/

// ANSWER

const multiply = (...nums) => nums.reduce((a, b) => a * b, 1)