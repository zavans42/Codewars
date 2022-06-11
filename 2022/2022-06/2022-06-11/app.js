/* 

# CHALLENGE

Write a function that returns a string in which firstname is swapped with last name.

# EXAMPLE

"john McClane" --> "McClane john"

*/

// ANSWER

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}