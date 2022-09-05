/* 

### CamelCase Method

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

### Example

sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1]

*/

// ANSWER

function sqInRect(lng, wdth) {
  if (lng == wdth) {
    return null;
  }

  let totalSquare = lng * wdth;

  let arr = [];
  let totalCurrent = 1;

  let min = Math.min(lng, wdth);
  let max = Math.max(lng, wdth);

  while (totalSquare > totalCurrent) {
    // array of min with the length of max / min
    let newArr = [...Array(Math.floor(max / min)).keys()].map((_) => min);

    arr.push(newArr);

    // get the remain of max - min
    min = max - newArr.reduce((a, b) => a + b);

    max = newArr[newArr.length - 1];

    // flatten array
    arr = arr.reduce((a, b) => a.concat(b), []);

    // sum of all the element squared
    totalCurrent = arr.map((x) => x ** 2).reduce((a, b) => a + b);
  }

  return arr;
}
