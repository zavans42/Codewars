/* CHALLENGE

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index 
from the minimum value up to the maximum value (both included).

*/

/* EXAMPLE

pipeFix([1,2,3,5,6,8,9]) // [1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12]) // [1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9]) // [6,7,8,9]
pipeFix([-1,4]) // [-1,0,1,2,3,4]
pipeFix([1,2,3]) // [1,2,3]

*/

// ANSWER

function pipeFix(numbers) {
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    const arrLeng = max - min + 1

    return [...Array(arrLeng).keys()].map((_, i) => min + i)
}