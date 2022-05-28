/* CHALLENGE

Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second 
element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

*/

/* EXAMPLE

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// ANSWER

function countPositivesSumNegatives(arr) {
    if (arr === null || arr.length < 1) {
        return []
    }
    
    // create new variable storing the count the positive one
    let countOfPositives = arr.filter(num => num > 0).length

    // create new variable storing the sum the negative one
    const sumOfNegatives = arr.filter(num => num < 0).reduce((a, b) => a + b, 0)

    // return an array with two previous variable
    return [countOfPositives, sumOfNegatives]
}