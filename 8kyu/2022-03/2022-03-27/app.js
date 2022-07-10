/* CHALLENGE

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

*/

/* EXAMPLE

greet("Jim") // "Hello, Jim!"
greet("Jane") // "Hello, Jane!"
greet("Simon") // "Hello, Simon!"
greet("Johnny") // "Hello, my love!"

*/

// ANSWER

const greet = (name) => name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"
