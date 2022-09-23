/* 

### Uncollapse Digits

You will be given a string of English digits "stuck" together, like this:
"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:
"zero nine one one eight two seven three six four two five"

### Example

"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"


### ANSWER

*/

function uncollapse(digits) {
  return digits
    .replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gi, "$1 ")
    .trim();
}
