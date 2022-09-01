/* 

# CHALLENGE

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.


# EXAMPLE

The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

// ANSWER

var countBits = function (n) {
    const binary = (n).toString(2).split('')

    return binary.filter(x => x > 0).length
};