/* 

# CHALLENGE

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

# EXAMPLE

problem("hello") // "Error"
problem(1) // 56
problem(5) // 256
problem(0) // 6
problem(1.2) // 66
problem(3) // 156
problem("RyanIsCool") // "Error"
problem(-3) // -144
problem("") // "Error"
problem(0.03) // 7.5

*/

// ANSWER

function problem(x) {
    if (typeof (x) === 'number') {
        return x * 50 + 6
    }
    return "Error"
}