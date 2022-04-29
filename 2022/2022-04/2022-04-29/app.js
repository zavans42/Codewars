/* CHALLENGE

We need a function that can transform a number into a string.

What ways of achieving this do you know?

*/

/* EXAMPLE

123 --> "123"
999 --> "999"

*/

// ANSWER

function numberToString(num) {
    // Return a string of the number here!

    // using toString() method
    let string = num.toString();


    // using String() method
    // let string = String(num);

    return string;

}