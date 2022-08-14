/* 

### CHALLENGE

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

### EXAMPLE

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

// ANSWER

function createPhoneNumber(numbers) {
    let split1 = numbers.slice(0, 3).join('')
    let split2 = numbers.slice(3, 6).join('')
    let split3 = numbers.slice(6).join('')

    return `(${split1}) ${split2}-${split3}`
}