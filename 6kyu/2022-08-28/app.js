/* 

### Sort the odd

You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


### Example

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

// ANSWER

function sortArray(array) {

    // array of even numbers
    let even = []

    array.map((x, i) => {
        if (!(x % 2)) {
            even.push(i)
        }
    })

    // array of odd numbers
    let odd = array.filter(x => (x % 2)).sort((a, b) => a - b)

    even.forEach(x => {
        odd.splice(x, 0, array[x])
    })

    return odd

}