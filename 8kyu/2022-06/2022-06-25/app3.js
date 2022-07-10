/* 

# CHALLENGE

Your task is to return the correct string using the Template String Feature.

# EXAMPLE

TempleStrings("Animals","Good"), 'Animals are Good'

*/

// ANSWER

var TempleStrings = function (obj, feature) {
    return `${obj} are ${feature}`
}