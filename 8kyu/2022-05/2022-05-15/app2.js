/* CHALLENGE

Very simple, given an integer or a floating-point number, find its opposite.

*/

/* EXAMPLE

1: -1
14: -14
-34: 34

*/

// ANSWER

function opposite(number) {
    return number < 0 ? Math.abs(number) : -number
}