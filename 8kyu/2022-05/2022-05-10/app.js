/* CHALLENGE

In this simple exercise, you will build a program that takes a value, integer, 
and returns a list of its multiples up to another value, limit . 

If limit is a multiple of integer, it should be included as well. There will only ever be 
positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

*/

/* EXAMPLE

findMultiples(5, 25) // [5, 10, 15, 20, 25]
findMultiples(1, 2) // [1, 2]
findMultiples(5, 7) // [5]
findMultiples(4, 27) // [4, 8, 12, 16, 20, 24]
findMultiples(11, 54) // [11, 22, 33, 44]

*/

// ANSWER

const findMultiples = (i, l) => [...Array(Math.floor(l / i)).keys()].map((_, b) => i * (b + 1))