/* CHALLENGE

Your task is to sum the differences between consecutive pairs in the array in descending order.

In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0

*/

/* EXAMPLE

sumOfDifferences([1, 2, 10]) // 9
sumOfDifferences([-3, -2, -1]) // 2

*/

// ANSWER

function sumOfDifferences(arr) {
    // array is empty / has only one element
    if (!arr || arr.length < 2) {
        return 0
    }

    const descendedArr = arr.sort((a, b) => b - a)

    return descendedArr[0] - descendedArr[arr.length - 1]

}