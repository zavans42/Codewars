/* CHALLENGE

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


/* EXAMPLE

find_average([1,1,1]) // 1
find_average([1,2,3]) // 2
find_average([1,2,3,4]) // 2.5

*/

// ANSWER

function find_average(array) {

    // define sum and result for later
    let sum = 0;
    let result;

    switch (true) {

        // if the array is empty return 0
        case array.length < 1:
            result = 0;
            break;

            // if the array is not empty return the average of array
        default:

            // find the sum of array
            for (let num of array) {
                sum += num;
            }

            // find the average of array
            result = sum / array.length;
    }

    // return the average of array
    return result;

}