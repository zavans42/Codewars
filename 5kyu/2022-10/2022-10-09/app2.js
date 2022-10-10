/* 

### Number of trailing zeros of N!

Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

### Example

zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros


### ANSWER

*/

function zeros(n) {
  let arr = [];

  do {
    n /= 5;
    arr.push(Math.floor(n));
  } while (n >= 5);

  return arr.reduce((a, b) => a + b, 0);
}
