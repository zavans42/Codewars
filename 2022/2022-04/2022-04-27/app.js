/* CHALLENGE

Complete the solution so that it reverses all of the words within the string passed in.

*/

/* EXAMPLE

reverseWords("hello world!"), "world! hello")
reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
reverseWords("foobar"                       ),  "foobar")
reverseWords("kata editor"                  ),  "editor kata")
reverseWords("row row row your boat"        ),  "boat your row row row")

*/

// ANSWER

function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}