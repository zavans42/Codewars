/* 

# CHALLENGE

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# EXAMPLE

repeatStr(3, "*") // "***")
repeatStr(5, "#") // "#####")
repeatStr(2, "ha ") // "ha ha ")

*/

// ANSWER

function repeatStr(n, s) {

    //   let result = '';
    //   for (let i = 0; i < n; i++) {
    //     result += s;
    //   }

    //   return result;

    return s.repeat(n);
}