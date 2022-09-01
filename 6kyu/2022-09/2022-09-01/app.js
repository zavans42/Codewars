/* 

### Tribonacci Sequence

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

### EXAMPLE

tribonacci([1,1,1],10) // [1,1,1,3,5,9,17,31,57,105]
tribonacci([0,0,1],10) // [0,0,1,1,2,4,7,13,24,44]
tribonacci([0,1,1],10) // [0,1,1,2,4,7,13,24,44,81]
tribonacci([1,0,0],10) // [1,0,0,1,1,2,4,7,13,24]
tribonacci([0,0,0],10) // [0,0,0,0,0,0,0,0,0,0]
tribonacci([1,2,3],10) // [1,2,3,6,11,20,37,68,125,230]
tribonacci([3,2,1],10) // [3,2,1,6,9,16,31,56,103,190]
tribonacci([1,1,1],1) // [1]
tribonacci([300,200,100],0) // []

*/

// ANSWER

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  if (n < 3) {
    return [signature[0]];
  }

  let sumOfThree;

  while (signature.length < n) {
    sumOfThree = signature.slice(-3).reduce((a, b) => a + b, 0);
    signature.push(sumOfThree);
  }

  return signature.slice(-n);
}
