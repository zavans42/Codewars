/* 

### CHALLENGE

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

### EXAMPLE

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

*/

// ANSWER

function twoOldestAges(ages) {

    // get the first highest age
    let maxOne = Math.max(...ages)

    // remove the first highest age from array
    let newAges = ages.filter((x, i) => ages.indexOf(x) !== ages.indexOf(maxOne))

    // if the first and the second highest age are the same, remove only the first one
    if (ages.indexOf(maxOne) !== ages.lastIndexOf(maxOne)) {
        newAges = ages.filter((x, i) => i !== ages.indexOf(x))
    }

    // get the second highest age from the new array
    let maxTwo = Math.max(...newAges)


    return [maxTwo, maxOne]
}