/* 

### Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. 
NOTE: All numbers will be whole numbers greater than 0.


### Example

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

// ANSWER

function expandedForm(num) {

    // array of num argument
    const arrNum = Array.from(String(num), Number)

    // get the length of the arrNum
    const length = arrNum.length

    // for each element that isn't zero, multiply it to the power of ten, and join with plus sign
    return arrNum.map((x, i) => x * (Math.pow(10, length - i - 1))).filter(x => x != 0).join(' + ')

}