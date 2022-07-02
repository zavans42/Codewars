/* 

# CHALLENGE

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to 
attend the next coding meetup that you are organising.

Your task is to return:
1. true if at least one Ruby developer has signed up; or
2. false if there will be no Ruby developers.

Note: The input array will always be valid and formatted as in the example above.

# EXAMPLE

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

your function should return true.

*/

// ANSWER

function isRubyComing(list) {
    let lang = []

    for (let devs of list) {
        lang.push(devs.language)
    }

    return lang.some(x => x === 'Ruby')
}