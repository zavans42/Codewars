/* 

# CHALLENGE

This time no story, no theory. The examples below show you how to write function accum
Note : The parameter of accum is a string which includes only letters from a..z and A..Z.


# EXAMPLE

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

// ANSWER

function accum(str) {

    const strToArr = str.toLowerCase().split('')

    const awp = strToArr.map((el, index) => el.repeat(index + 1))

    return awp.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('-')
}