/* 

### Maximum subarray sum

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Notes:
- When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
  180 is before 90 since, having the same "weight" (9), it comes before as a string.
- All numbers in the list are positive numbers and the list can be empty.


### Example

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
"100 180 90 56 65 74 68 86 99"


### ANSWER

*/

function orderWeight(strng) {
  return strng
    .split(" ")
    .sort((a, b) => {
      // the weight of a number will be from now on the sum of its digits.
      let sumA = a.split("").reduce((a, b) => +a + +b, 0);
      let sumB = b.split("").reduce((a, b) => +a + +b, 0);

      // sort by weight
      if (sumA < sumB) {
        return -1;
      }
      if (sumA > sumB) {
        return 1;
      }

      // when two numbers have the same "weight", class them as if they were strings
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
    })
    .join(" ");
}
