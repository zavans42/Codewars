/* 

# CHALLENGE

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.
 
# EXAMPLE

squareArea(2) // 1.62)
squareArea(0) // 0)
squareArea(14.05) // 80)

*/

// ANSWER

function squareArea(A) {
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area * 100) / 100
}