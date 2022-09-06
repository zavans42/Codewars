/* 

### +1 Array

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
> the array can't be empty
> only non-negative, single digit integers are allowed

Return nil (or your language's equivalent) for invalid inputs.

### Example

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

*/

// ANSWER

function upArray(arr) {
  // check if array is falsy
  if (typeof arr === "undefined" || arr === null || arr.length === 0) {
    return null;
  }

  // check if element is "false" according to the rules
  if (
    arr.some((x) => x < 0) ||
    arr.some((y) => typeof y !== "number") ||
    arr.some((z) => z > 9)
  ) {
    return null;
  }

  // check if element is 9, check all previous digits whether they are also a 9
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i] = arr[i] + 1;
      break;
    } else {
      arr[i] = 0;
    }

    if (i === 0) {
      arr.unshift(1);
    }
  }

  return arr;
}
