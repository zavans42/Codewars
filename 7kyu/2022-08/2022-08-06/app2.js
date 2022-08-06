/* 

# CHALLENGE

You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

# EXAMPLE

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// ANSWER

function stray(num) {
    const max = Math.max(...num)
    const min = Math.min(...num)

    return num.filter(n => n === max).length === 1 ? max : min;
}