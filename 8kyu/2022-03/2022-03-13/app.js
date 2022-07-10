/* CHALLENGE

1 < 2 < 3 === true right? but could
3 < 2 < 1 === true too??

Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:

greaterThanLessThan(1, 2 3) === true
and

greaterThanLessThan(3, 2 1) === true
But also

graterThanLessThan(-3, -2, -1) == false
with more examples on the expected behavior in the test cases.

*/

/* EXAMPLE

greaterThanLessThan(Number(null), 0, 1) // true
greaterThanLessThan(700000000001, 700000000002, -1) // false
greaterThanLessThan(-9, -8, 7) // true
greaterThanLessThan(-9, -8, -7) // false

*/

// ANSWER

function greaterThanLessThan(a, b, c) {
    return (a < b) < c
}