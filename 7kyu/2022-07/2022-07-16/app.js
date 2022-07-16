/* 

# CHALLENGE

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

Notes:
- Vowels in this context refers to: a e i o u y (including upper case)
- This is indexed from [1..n] (not zero indexed!)


# EXAMPLE

Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

*/

// ANSWER

function vowelIndices(word) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']

    let letter = word.split('')
    let returned = []

    letter.forEach((x, i) => {
        if (VOWELS.includes(x.toLowerCase())) {
            returned.push(i + 1)
        }
    })
    return returned
}