/* CHALLENGE

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
Note: only positive integers will be tested.

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/


/* EXAMPLE

cockroachSpeed(1.08) // 30
cockroachSpeed(1.09) // 30
cockroachSpeed(0) //  0

*/

// ANSWER


function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s / 0.036)
}