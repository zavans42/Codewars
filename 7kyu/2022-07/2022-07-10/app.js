/* 

# CHALLENGE

Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

# EXAMPLE

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

// ANSWER

// P: array of numbers
// R: string "even" or "odd"
// E: 
// P: 
    // sum all the elements inside the array
        // return "even" if the sum is even, otherwise return "odd"

const oddOrEven = arr => arr.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd"