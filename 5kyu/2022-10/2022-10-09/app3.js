/* 

### Greed is Good

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

### Example

Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


### ANSWER

*/

function score(dice) {
  let points = 0;
  let throws = {};

  // find how many times a number appears
  for (const n of dice) {
    throws[n] ? throws[n]++ : (throws[n] = 1);
  }

  for (const n in throws) {
    switch (n) {
      case "1":
        points += Math.floor(throws[n] / 3) * 1000 + (throws[n] % 3) * 100;
        break;
      case "5":
        points += Math.floor(throws[n] / 3) * 500 + (throws[n] % 3) * 50;
        break;
      default:
        points += Math.floor(throws[n] / 3) * n * 100;
        break;
    }
  }

  return points;
}
