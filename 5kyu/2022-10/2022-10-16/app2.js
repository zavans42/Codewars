/*

A Chain adding function
Tags: MATHEMATICS, FUNCTIONAL PROGRAMMING, PUZZLES

1. DESCRIPTION

We want to create a function that will add numbers together when called in succession.
We also want to be able to continue to add numbers to our chain.
A single call should be equal to the number passed in.
We should be able to store the returned values and reuse them.
We can assume any number being passed in will be valid whole number.We want to create a function that will add numbers together when called in succession.

2. EXAMPLE

add(1)(2); // == 3
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
add(1); // == 1

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10

*/

function add(n) {
  var fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}
