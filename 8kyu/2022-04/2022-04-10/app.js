/* CHALLENGE

You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.

Note: only positive integers will be tested.

*/


/* EXAMPLE

otherAngle(30, 60) // 90
otherAngle(60, 60) // 60
otherAngle(43, 78) // 59
otherAngle(10, 20) // 150

*/

// ANSWER


function otherAngle(a, b) {
    return 180 - a - b;
}