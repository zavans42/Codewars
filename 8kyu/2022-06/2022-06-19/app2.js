/* 

# CHALLENGE

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
min = age/2 + 7
max = (age-7) * 2

This equation doesn't work when the age <= 14, so use this equation instead:
min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). 
Return your answer in the form [min]-[max]

# EXAMPLE

datingRange(17) // "15-20"
datingRange(40) // "27-66"
datingRange(15) // "14-16"
datingRange(35) // "24-56"
datingRange(10) // "9-11"

*/

// ANSWER

function datingRange(age) {
    let min, max;

    if (age <= 14) {
        min = Math.floor(age - 0.1 * age)
        max = Math.floor(age + 0.1 * age)
    } else {
        min = Math.floor(age / 2 + 7)
        max = Math.floor((age - 7) * 2)
    }

    return `${min}-${max}`
}