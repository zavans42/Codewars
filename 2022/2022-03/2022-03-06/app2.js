/* CHALLENGE

Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

*/

/* EXAMPLE

Math.roundTo(3.1415926535, 4) // return 3.1416

*/

// ANSWER

Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}