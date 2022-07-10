/* CHALLENGE

Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

*/

/* EXAMPLE

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"

*/

// ANSWER

function whatNumberIsIt(n) {

    if (isNaN(n)) {
        return "Input number is Number.NaN"
    }

    switch (n) {
        case 1.7976931348623157e+308:
            return "Input number is Number.MAX_VALUE"
        case 5e-324:
            return "Input number is Number.MIN_VALUE"
        case -Infinity:
            return "Input number is Number.NEGATIVE_INFINITY"
        case Infinity:
            return "Input number is Number.POSITIVE_INFINITY"
        default:
            return `Input number is ${n}`
    }

}