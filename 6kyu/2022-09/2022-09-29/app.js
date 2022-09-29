/* 

### Extract last names of people named Michael

Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
1. Advance stage,described as letter C
2. Initial stage,described as letter c

Rest cells are divided as follows:
1. Normal cell,described as lowercase letter
2. Important cell,described as uppercase letter

Prerequisites:
1. Important cell,cannot be cut out.
2. Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.


### Example

doTest('CC', '');
doTest('CAAC', 'AA');
doTest('CaaC', '');
doTest('C', '');
doTest('acb', 'ab')
doTest('aCb', '')
doTest('acCb', 'a')
doTest('acCcb', 'ab')
doTest('ab', 'ab')
doTest('aCZ', 'Z')
doTest('BCE', 'BE')
doTest('nce', 'ne')
doTest('NcE', 'NE')


### ANSWER

*/

function cutCancerCells(organism) {
  return organism.replace(/[a-z]?C+[a-z]?|(?<=[A-Z]?)C+(?=[A-Z]?)|c+/g, "");
}
