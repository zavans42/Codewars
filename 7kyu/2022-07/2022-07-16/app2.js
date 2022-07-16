/* 

# CHALLENGE

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

Notes:
- The function accepts an integer and returns an integer


# EXAMPLE

For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.

squareDigits(3212) // 9414
squareDigits(2112) // 4114
squareDigits(0) // 0

*/

// ANSWER

function squareDigits(num) {
    return Number(String(num).split('').map(x => x ** 2).join(''))
}