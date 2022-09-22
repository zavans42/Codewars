/* 

### Pyramid Array

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
Note: the subarrays should be filled with 1s


### Example

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]


### ANSWER

*/

function pyramid(n) {
  return Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }, (v2) => 1)
  );
}
