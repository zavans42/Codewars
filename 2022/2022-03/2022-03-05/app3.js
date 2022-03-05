/* CHALLENGE

Your task is simply to count the total number of lowercase letters in a string.
*/

/* EXAMPLE

lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

*/

// ANSWER

function lowercaseCount(str) {
    if (str === '') {
        return 0
    }
    const regex = /[a-z]/g
    let lowercaseStr = str.match(regex)
    return lowercaseStr === null ? 0 : lowercaseStr.length
}