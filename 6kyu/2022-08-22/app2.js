/* 

### CHALLENGE

There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.

### EXAMPLE

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/

// ANSWER

function findUniq(arr) {
    const uniqueNum = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))

    return uniqueNum[0]
}