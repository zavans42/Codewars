/* 

# CHALLENGE

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# EXAMPLE

doubleChar("abcd") // "aabbccdd")
doubleChar("Adidas") // "AAddiiddaass")
doubleChar("1337") // "11333377")
doubleChar("illuminati") // "iilllluummiinnaattii")
doubleChar("123456") // "112233445566")
doubleChar("%^&*(") // "%%^^&&**((")

*/

// ANSWER

function doubleChar(str) {
    return str.split('').map(x => x.repeat(2)).join('')
}