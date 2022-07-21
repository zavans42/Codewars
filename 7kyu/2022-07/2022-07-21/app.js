/* 

# CHALLENGE

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


# EXAMPLE

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

// ANSWER

function XO(str) {
    str = str.toLowerCase().split('')

    return str.filter(x => x === 'x').length === str.filter(o => o === 'o').length
}