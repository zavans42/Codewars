/* 

# CHALLENGE

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:


# EXAMPLE

flattenAndSort([]) // []
flattenAndSort([[] // []]), []
flattenAndSort([[], [1]]) // [1]
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) // [1, 2, 3, 4, 5, 6, 100]

*/

// ANSWER

"use strict";

function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b);
}