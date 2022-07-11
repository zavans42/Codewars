/* 

# CHALLENGE

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. 
write a function that returns the average age of developers (rounded to the nearest integer).

Notes:
1. The input array will always be valid and formatted as in the example above.
2. Age is represented by a number which can be any positive integer.


# EXAMPLE

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

In the example above your function should return 50 (number).

*/

// ANSWER

function getAverageAge(list) {
    const devAgeList = list.map(x => x.age)

    const averageAge = Math.round(devAgeList.reduce((a, c) => a + c, 0) / list.length)
    return averageAge;

}