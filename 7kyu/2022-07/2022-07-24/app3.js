/* 

# CHALLENGE

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


# EXAMPLE

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// ANSWER

function reverseWords(str) {
    // convert the string to array
    const strToArr = str.split(' ')

    // split each element into an array
    const elArr = strToArr.map(x => x.split('').reverse().join(''))

    // join the reversed array
    return elArr.join(' ')
}