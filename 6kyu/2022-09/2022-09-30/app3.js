/* 

### Length of missing array

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Note:
1. If the array of arrays is null/nil or empty, the method should return 0.
2. When an array in the array is null or empty, the method should return 0 too!
3. There will always be a missing element and its length will be always between the given arrays.


### Example

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


### ANSWER

*/

function getLengthOfMissingArray(arrayOfArrays) {
  // if the array of arrays is null/nil or empty, the method should return 0.
  if (arrayOfArrays == false || arrayOfArrays == null) {
    return 0;
  }

  // when an array in the array is null or empty, the method should return 0 too!
  let missingArr = arrayOfArrays.map((arr) => (!!arr ? arr.length : 0));
  if (missingArr.includes(0)) {
    return 0;
  }

  // array without the missing one
  const max = Math.max(...missingArr);
  const fullArr = [...Array(max).keys()].map((_, i) => i + 1);

  // find the missing number in array
  let missingNum = fullArr.reduce((p, c) => {
    if (!missingArr.includes(c)) {
      p.push(c);
    }
    return p;
  }, []);

  return Math.max(...missingNum);
}
