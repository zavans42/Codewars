/* 

# CHALLENGE

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 
# EXAMPLE

even_or_odd(2) // "Even")
even_or_odd(7) // "Odd")
even_or_odd(-42) // "Even")
even_or_odd(-7) // "Odd")
even_or_odd(0) // "Even")

*/

// ANSWER

function even_or_odd(number) {
    // return even or odd
    return number % 2 === 0 ? 'Even' : 'Odd';
}