/* CHALLENGE

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.

*/

/* EXAMPLE

countSheep(0) // ""
countSheep(1) // "1 sheep..."
countSheep(2) // "1 sheep...2 sheep..."
countSheep(3) // "1 sheep...2 sheep...3 sheep..."

*/

// ANSWER

// 1. Use spread operator to create array
// 2. Get the keys of each element of the array
// 3. Modify the value to meet the criteria
// 4. Turn the array into string using join()
const countSheep = num => [...Array(num).keys()].map(x => `${x+1} sheep...`).join('')