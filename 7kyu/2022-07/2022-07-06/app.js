/* 

# CHALLENGE

There's a built-in function called repeat on strings. It repeats the given string N times.
Now imagine this function wasn't built-in. Can you implement it yourself?

# EXAMPLE

'a'.repeat(3) === 'aaa'
'around the world '.repeat(2) === 'around the world around the world'

*/

// ANSWER

String.prototype.repeat = function (count) {

    let result = ''

    for (let i = 0; i < count; i++) {
        result += this.slice()
    }

    return result
};