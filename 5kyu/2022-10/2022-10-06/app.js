/* 

### Calculating with Functions

This time we want to write calculations using functions and get the results

Requirements:
- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:


### Example

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3


### ANSWER

*/

const zero = (x = 0) => Math.floor(eval(0 + x));
const one = (x = 0) => Math.floor(eval(1 + x));
const two = (x = 0) => Math.floor(eval(2 + x));
const three = (x = 0) => Math.floor(eval(3 + x));
const four = (x = 0) => Math.floor(eval(4 + x));
const five = (x = 0) => Math.floor(eval(5 + x));
const six = (x = 0) => Math.floor(eval(6 + x));
const seven = (x = 0) => Math.floor(eval(7 + x));
const eight = (x = 0) => Math.floor(eval(8 + x));
const nine = (x = 0) => Math.floor(eval(9 + x));

const plus = (y) => `+${y}`;
const minus = (y) => `-${y}`;
const times = (y) => `*${y}`;
const dividedBy = (y) => `/${y}`;
