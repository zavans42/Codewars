/* 

# CHALLENGE

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

# EXAMPLE

stringToNumber("1234") // 1234
stringToNumber("605") //  605
stringToNumber("1405") // 1405
stringToNumber("-7") // -7

*/

// ANSWER

var stringToNumber = function (str) {
    // put your code here

    // using Number() function
    let number = Number(str);

    // using parseInt() / parseFloat()
    // let number parseInt(str)

    return number;
}