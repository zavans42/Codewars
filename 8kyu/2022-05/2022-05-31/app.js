/* CHALLENGE

Build a function that returns an array of integers from n to 1 where n>0.

*/

/* EXAMPLE

reverseSeq(5), [5, 4, 3, 2, 1]

*/

// ANSWER

const reverseSeq = n => {

    // define array for storing the final array
    let array = [];

    // adding integer to array
    for (let i = n; i > 0; i--) {
        array.push(i);
    }

    // return the final array
    return array
};