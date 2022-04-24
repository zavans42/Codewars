/* CHALLENGE

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

/* EXAMPLE

removeChar('eloquent') // 'loquen'
removeChar('country') // 'ountr'
removeChar('person') // 'erso'
removeChar('place') // 'lac'
removeChar('ooopsss') // 'oopss'

*/

// ANSWER

function removeChar(str) {

    // convert string to array
    let array = Array.from(str);
    // remove the last character
    array.pop()
    // remove the first character
    array.shift()
    // convert array back to string
    const result = array.join('')

    return result;


};