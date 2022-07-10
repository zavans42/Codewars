/* CHALLENGE

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

*/


/* EXAMPLE

greet('Daniel', 'Daniel') // 'Hello boss'
greet('Greg', 'Daniel') // 'Hello guest'

*/

// ANSWER

function greet(name, owner) {
    // Add code here
    return name === owner ? 'Hello boss' : 'Hello guest'
}