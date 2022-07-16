/* 

# CHALLENGE

Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

Notes:
- The inputs will always be two positive integers between 2 and 99.


# EXAMPLE

isCoprime(20, 27) // true
isCoprime(12, 39) // false

*/

// ANSWER

function isCoprime(x, y) {
    // find the factors
    const factors = num => [...Array(num + 1).keys()].filter(x => num % x === 0)
    const xFactors = factors(x)
    const yFactors = factors(y)

    let diff = [...xFactors, ...yFactors].filter((e, i, a) => a.indexOf(e) !== i)

    return Math.max(...diff) === 1 ? true : false;
}