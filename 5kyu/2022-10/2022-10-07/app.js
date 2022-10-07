/* 

### Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


### Example

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]


### ANSWER

*/

var maxSequence = function (arr) {
  // check if falsy
  if (!arr.length) return 0;

  return arr
    .map((integer, index) => {
      let subArr = [];

      for (let i = 0; i <= arr.length - index; i++) {
        // get subarray
        let sliced = arr.slice(index, i + index);
        // get sum of a contiguous subsequence
        let sum = sliced.reduce((pr, cr) => pr + cr, 0);
        subArr.push(sum);
      }

      // get the maximum sum of each sub array
      return Math.max(...subArr);
    }) // get the maximum sum of all sub array
    .sort((a, b) => b - a)[0];
};
