/* CHALLENGE

You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!

Note: Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!

*/

/* EXAMPLE

betterThanAverage([2, 3], 5) // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) // true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) // false
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) // false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) // false

*/

// ANSWER

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
    return yourPoints < average ? false : true;
}