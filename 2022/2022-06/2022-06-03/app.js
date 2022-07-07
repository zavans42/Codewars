/* 

# CHALLENGE

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

 
# EXAMPLE

348597 => [7,9,5,8,4,3]
0 => [0]

*/

// ANSWER

function digitize(n) {
    return String(n).split('').reverse().map(x => +x)
}