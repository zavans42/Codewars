/* CHALLENGE

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

/* EXAMPLE

well(['bad', 'bad', 'bad']) // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // 'I smell a series!'

*/

// ANSWER

function well(arr) {
    // if no good series found
    if (!(arr.filter(series => series === 'good').length)) {
        return 'Fail!'
    }

    // if one or two good series found
    if (arr.filter(series => series === 'good').length < 3) {
        return 'Publish!'
    }

    // if more than two good series found
    if (arr.filter(series => series === 'good').length > 2) {
        return 'I smell a series!'
    }
}