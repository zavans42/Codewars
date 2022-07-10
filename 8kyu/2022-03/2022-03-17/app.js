/* CHALLENGE

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."

*/


/* EXAMPLE

animal({name:"dog",legs:4,color:"white"}) // "This white dog has 4 legs."
animal({name:"cock",legs:2,color:"red"}) // "This red cock has 2 legs."
animal({name:"rabbit",legs:4,color:"gray"}) // "This gray rabbit has 4 legs."

*/

// ANSWER

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}