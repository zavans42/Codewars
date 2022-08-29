/* 

### Make the Deadfish Swim

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:
> i increments the value (initially 0)
> d decrements the value
> s squares the value
> o outputs the value into the return array

Invalid characters should be ignored.


### Example

parse("iiisdoso") => [ 8, 64 ]

*/

// ANSWER

function parse(data) {
    let arr = []
    let num = 0

    data.split('').forEach((x, i) => {
        if (x === 'i') {
            num++
        }
        if (x === 'd') {
            num--
        }
        if (x === 's') {
            num **= 2
        }
        if (x === 'o') {
            arr.push(num)
        }
    })

    return arr
}