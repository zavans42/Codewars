/* CHALLENGE

Your function takes two arguments:
1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/


/* EXAMPLE

twiceAsOld(36,7) // 22
twiceAsOld(55,30) // 5
twiceAsOld(42,21) // 0
twiceAsOld(22,1) // 20
twiceAsOld(29,0) // 29

*/

// ANSWER

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here

    let twice = sonYearsOld * 2;
    return twice >= dadYearsOld ? twice - dadYearsOld : dadYearsOld - twice;
}