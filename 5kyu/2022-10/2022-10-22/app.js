/*

Merged String Checker
Tags: STRINGS, ALGORITHMS

1. DESCRIPTION

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
The restriction is that the characters in part1 and part2 should be in the same order as in s.
The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

2. EXAMPLE

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

*/

const isMerge = (s3, s1, s2) => {
  let dp = [];

  if (s1 === "") {
    return s2 === s3;
  }
  if (s2 === "") {
    return s1 === s3;
  }

  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  for (let i = 0; i < s1.length + 1; i++) {
    dp.push([]);
    for (let j = 0; j < s2.length + 1; j++) {
      if (i === 0 && j === 0) {
        dp[i].push(true);
      } else {
        let char = s3.charAt(i + j - 1);
        if (char === s1.charAt(i - 1) && dp[i - 1][j]) {
          dp[i].push(true);
        } else if (char === s2.charAt(j - 1) && dp[i][j - 1]) {
          dp[i].push(true);
        } else {
          dp[i].push(false);
        }
      }
    }
  }
  return dp[s1.length][s2.length];
};
