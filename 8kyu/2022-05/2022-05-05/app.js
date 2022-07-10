/* CHALLENGE

Given an array of integers, return a new array with each value doubled.

*/

/* EXAMPLE

maps([1, 2, 3]) // [2, 4, 6]
maps([4, 1, 1, 1, 4]) // [8, 2, 2, 2, 8] 
maps([2, 2, 2, 2, 2, 2]) // [4, 4, 4, 4, 4, 4] 

*/

// ANSWER

const maps = arr => arr.map(x => x * 2)