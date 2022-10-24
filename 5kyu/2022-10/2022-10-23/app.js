/*

Last digit of a large number
Tags: ALGORITHMS, MATHEMATICS

1. DESCRIPTION

Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b
Note that aaa and bbb may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 47829699
The last decimal digit of (2^200)2^300, which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

2. EXAMPLE

lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

*/

var lastDigit = function (str1, str2) {
  return +str2 === 0
    ? 1
    : Math.pow(+str1.slice(-1), (+str2.slice(-2) % 4) + 4) % 10;
};
