/* CHALLENGE

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)

Note:
If either input is an empty string, consider it as zero.
Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

*/

/* EXAMPLE

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/

// ANSWER

const sumStr = (n1,n2) => String(+n1 + +n2)

const sumStr1 = (...args) => String(args.reduce((a, b) => +a + +b, 0))