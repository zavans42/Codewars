/* 

# CHALLENGE

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"

 
# EXAMPLE

ghostBusters("Factor y") === "Factory" // 'Nope, there may still be a ghost in the building. Try again.'
ghostBusters("O  f fi ce") === "Office" // 'Nope, there may still be a ghost in the building. Try again.'
ghostBusters("BusStation") === "You just wanted my autograph didn't you?" // 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.'

*/

// ANSWER

function ghostBusters(building) {
    
    if (building.includes(' ')) {
        return building.split(' ').join('')
    }

    return "You just wanted my autograph didn't you?"
}