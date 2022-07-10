/* CHALLENGE

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

*/

/* EXAMPLE

abbrevName("Sam Harris") // "S.H"
abbrevName("Patrick Feenan") // "P.F"
abbrevName("Evan Cole") // "E.C"
abbrevName("P Favuzzi") // "P.F"
abbrevName("David Mendieta") // "D.M"

*/

// ANSWER

function abbrevName(name) {

    // What did i just wrote
    return name.split(' ').map(x => Array.from(x)).map(y => y.shift()).join('.').toUpperCase()
}