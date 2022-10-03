/* 

### Directions Reduction

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

Notes: Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].


### Example

A man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

The directions given to the man are, for example, the following (depending on the language):
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]


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
