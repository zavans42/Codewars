/* 

# CHALLENGE

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".


# EXAMPLE

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5

*/

// ANSWER

function arithmetic(a, b, operator) {
    const operators = ["add", "subtract", "multiply", "divide"]

    return operator === operators[0] ? a + b :
        operator === operators[1] ? a - b :
        operator === operators[2] ? a * b :
        a / b
}