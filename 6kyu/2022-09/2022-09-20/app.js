/* 

### Number Format

Format any integer provided into a string with "," (commas) in the correct places.


### Example

numberFormat(100000); // return '100,000'
numberFormat(5678545); // return '5,678,545'
numberFormat(-420902); // return '-420,902'


*/

// ANSWER

var numberFormat = function (number) {
  number = Array.from(String(number), String);

  return number
    .reverse()
    .join("")
    .replace(/(\d{3})/g, "$1,")
    .split("")
    .reverse()
    .join("")
    .replace(/(^-?)\,/, "$1");
};
