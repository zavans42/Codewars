/* 

# CHALLENGE

Given an integral number, determine if it's a square number:
The tests will always use some integral number, so don't worry about that in dynamic typed languages.


# EXAMPLE

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

// ANSWER

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}