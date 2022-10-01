/* 

### Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


### Example

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


### ANSWER

*/

function moveZeros(arr) {
  let noZeros = arr.filter((x) => x !== 0);
  let zeros = arr.filter((x) => x === 0);

  return [...noZeros, ...zeros];
}
