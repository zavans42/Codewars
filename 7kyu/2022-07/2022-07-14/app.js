/* 

# CHALLENGE

Count the number of divisors of a positive integer n.

Notes:
- Random tests go up to n = 500000.


# EXAMPLE

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

// ANSWER

const getDivisorsCnt = n => {
    let arr = []

    for (let i = 0; i <= n; i++) {
        if (Number.isInteger(n / i))
            arr.push(i)
    }

    return arr.length
}