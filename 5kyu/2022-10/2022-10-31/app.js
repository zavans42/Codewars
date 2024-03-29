/*

Josephus Survivor
Tags: MATHEMATICS,COMBINATORICS, ALGORITHMS, LISTS, ARRAYS

1. DESCRIPTION

You have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:
    josephus_survivor(7,3) => means 7 people in a circle;
    one every 3 is eliminated until one remains
    [1,2,3,4,5,6,7] - initial sequence
    [1,2,4,5,6,7] => 3 is counted out
    [1,2,4,5,7] => 6 is counted out
    [1,4,5,7] => 2 is counted out
    [1,4,5] => 7 is counted out
    [1,4] => 5 is counted out
    [4] => 1 counted out, 4 is the last element - the survivor!

2. EXAMPLE

josephusSurvivor(7,3) // 4
josephusSurvivor(11,19) // 10
josephusSurvivor(1,300) // 1
josephusSurvivor(14,2) // 13
josephusSurvivor(100,1) // 100


*/

function josephusSurvivor(n, k) {
  let arr = [...Array(n)].map((_, i) => i + 1);

  let p = 0;
  while (arr.length > 1) {
    p = (p + k - 1) % arr.length;
    arr.splice(p, 1);
  }

  return arr[0];
}
