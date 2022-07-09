/* 

# CHALLENGE

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins

Note:
1. The original order should be preserved.
2. If there are no GitHub admin developers in a given language then return an empty array [].
3. The input array will always be valid and formatted as in the example above.
4. The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
5. The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

# EXAMPLE

For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

should return:
[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]

*/

// ANSWER

function findAdmin(list, lang) {
    return list.filter(x => x.language === lang && x.githubAdmin === 'yes')
}