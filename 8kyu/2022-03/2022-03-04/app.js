/* CHALLENGE

In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!
*/

/* EXAMPLE

var x = something;
x === x // returns false!

Write a function which will return value for which strict comparison will give false!
*/

// ANSWER

function findStrangeValue() {
    var x = NaN
    return x
}