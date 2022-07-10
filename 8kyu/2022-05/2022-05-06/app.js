/* CHALLENGE

Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.

If the whole array is consecutive then return null2.

*/

/* EXAMPLE

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

*/

// ANSWER

function firstNonConsecutive(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }

    }
    return null

}