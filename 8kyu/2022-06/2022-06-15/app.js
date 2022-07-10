/* 

# CHALLENGE

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# EXAMPLE

fakeBin('45385593107843568') // '01011110001100111')
fakeBin('509321967506747') // '101000111101101') 
fakeBin('366058562030849490134388085') // '011011110000101010000011011')

*/

// ANSWER

const fakeBin = (str) => {
    let arr = str.split('')

    let newArr = [];
    for (let num of arr) {
        num < 5 ? newArr.push('0') : newArr.push('1');
    }
    return newArr.join('')
}