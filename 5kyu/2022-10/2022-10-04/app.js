/* 

### RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


### Example

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


### ANSWER

*/

function dirReduc(arr) {
    let str = arr.join(" ");
    let re = /north south|south north|east west|west east/i;
  
    while (re.test(str)) {
      str = str
        // remove direct opposites
        .replace(re, "")
        // remove double whitespaces & whitespace in the beginning or the end of the word
        .replace(/^\s|\s(?=\s)|\s$/, "");
    }
  
    // check if string is empty
    return /\w/.test(str) ? str.split(" ") : [];
  }
  