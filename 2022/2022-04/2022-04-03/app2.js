/* CHALLENGE

Given an array of integers your solution should find the smallest integer.

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/


/* EXAMPLE

findSmallestInt([78,56,232,12,8]), // 8 'Should return the smallest int 8'
findSmallestInt([78,56,232,12,18]), // 12 'Should return the smallest int 12'
findSmallestInt([78,56,232,412,228]), // 56 'Should return the smallest int 56'
findSmallestInt([78,56,232,12,0]), // 0 'Should return the smallest int 0'
findSmallestInt([1,56,232,12,8]), // 1 'Should return the smallest int 1'

*/

// ANSWER

class SmallestIntegerFinder {
    findSmallestInt(args) {

        // if num1 < num2, return num1
        return args.reduce((num1, num2) => num1 < num2 ? num1 : num2)
    }
}