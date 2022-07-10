/* CHALLENGE

Your boss decided to save money by purchasing some cut-rate optical character recognition software for 
scanning in the text of old novels to your database. At first it seems to capture words okay, but you 
quickly notice that it throws in a lot of numbers at random places in the text.

*/

/* EXAMPLE

'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

*/

// ANSWER

// P: string with numbers init
// R: string without the numbers, but include the special char
// E: 
// P: 
    // return empty quote if it false
    // check if the string contains number
    // replace all the number with empty quote

function stringClean(s) {

    if (!s) {
        return ''
    }

    let regex = /[0-9]/g;
    let result = s.replace(regex, '');
    return result
}