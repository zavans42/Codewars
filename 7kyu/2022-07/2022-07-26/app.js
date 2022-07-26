/* 

# CHALLENGE

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


# EXAMPLE

findShort("bitcoin take over the world maybe who knows perhaps") // 3
findShort("turns out random test cases are easier than writing out basic ones") // 3
findShort("Let's travel abroad shall we") // 2

*/

// ANSWER

function findShort(s) {
    const strToArr = s.split(' ')
    const arrLength = strToArr.map(el => el.length)

    return Math.min(...arrLength)
}