/* 

# CHALLENGE

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

# EXAMPLE

keysAndValues({a: 1, b: 2, c: 3}) // [['a', 'b', 'c'], [1, 2, 3]]
keysAndValues({}) // [[], []]
keysAndValues({1: 'a', 2: 'b', 3: 'c'}) // [['1', '2', '3'], ['a', 'b', 'c']]

*/

// ANSWER

function keysAndValues(data) {

    const dataKeys = Object.keys(data)
    const dataValue = Object.values(data)
    return [dataKeys, dataValue]
}