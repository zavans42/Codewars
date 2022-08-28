/* 

### Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.


### Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// ANSWER

function solution(string) {
    // turn the string into an array
    let arr = string.split('')

    // get the indexes of camel case letter
    let camelArr = arr.map((_, i) => i).filter((x, i, a) => {
        return arr[i] !== arr[i].toLowerCase()
    })

    // modify the array by adding spaces before camel case letter
    camelArr.map((x, i) => {
        arr.splice(x + i, 0, ' ')
    })

    return arr.join('')

}