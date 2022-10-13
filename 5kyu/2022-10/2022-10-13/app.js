/* 

Integers: Recreation One
Tags: FUNDAMENTALS, ALGORITHMS

1. DESCRIPTION

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

2. EXAMPLE:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

3. NOTE:

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

*/

function listSquared(m, n) {
  let lists = [];

  for (let i = m; i < n; i++) {
    let divisors = [];

    // find all divisors of i
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j ** 2);
      }
    }

    const sum = divisors.reduce((a, b) => a + b, 0);

    if (Number.isInteger(Math.sqrt(sum))) {
      lists.push([i, sum]);
    }
  }

  return lists;
}

// FASTEST SOLUTION

function listSquared(m, n) {
  const pairs = [];

  for (let i = m; i <= n; i++) {
    let [sqrtI, s] = [Math.sqrt(i), 0];

    for (let j = 1; j < sqrtI; j++) {
      if (i % j == 0) {
        s += j ** 2 + (i / j) ** 2;
      }
    }
    // edge cases for i = 1
    if (sqrtI % 1 == 0) {
      s += i;
    }
    if (Math.sqrt(s) % 1 == 0) {
      pairs.push([i, s]);
    }
  }
  return pairs;
}
