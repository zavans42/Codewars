/* 

# CHALLENGE

The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum. 
Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' 
Array.sum() return the sum of all numbers in the array 

While not forbidden try to write both function without using a for loop

# EXAMPLE

Example: Array.range(0, 3) returns [0, 1, 2]

Example: [0, 1, 2].sum() returns 3 
         Array.range(-1,4).sum() should return 2

*/

// ANSWER

Array.range = function (start, count) {
    return [...Array(count)].map((_, i) => start + i)
}

Array.prototype.sum = function (arr) {
    return this.reduce((a, b) => a + b, 0)
}