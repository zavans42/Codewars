/* 

# CHALLENGE

The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly.

# EXAMPLE

replaceDots("one.two.three") // "one-two-three"

*/

// ANSWER

var replaceDots = function (str) {
    let arr = str.split('.')

    return arr.join('-')
}