/* 

### CHALLENGE

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

### EXAMPLE

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

// ANSWER

var uniqueInOrder = function (iterable) {

    // check type of iterable
    if (typeof (iterable) === 'string') {
        iterable = iterable.split('')
    }

    let newArr = []

    iterable.map((x, i) => {
        if (iterable[i] !== iterable[i + 1]) {
            newArr.push(x)
        }
    })

    return newArr

}