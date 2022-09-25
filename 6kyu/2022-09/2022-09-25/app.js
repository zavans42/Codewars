/* 

### Generic numeric template formatter

In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:
- If the bird's name has only one word, the code takes the first four letters of that word.
- If the name is made up of two words, the code takes the first two letters of each word.
- If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
- If the name is four words long, the code uses the first letter from all the words.

Additional considerations:
1. The four-letter codes in the returned array should be in UPPER CASE.
2. If a common name has a hyphen/dash, it should be considered a space.


### Example

If the input array is: ["Black-Capped Chickadee", "Common Tern"]
The return array would be: ["BCCH", "COTE"]


### ANSWER

*/

function birdCode(arr) {
  return arr.map((birdName) => {
    // replace dash with space
    birdName = birdName.replace(/\-/g, " ");

    switch (birdName.split(" ").length) {
      // If the bird's name has only one word, the code takes the first four letters of that word.
      case 1:
        birdName = birdName.match(/[\w]{4}/);
        break;
      // If the name is made up of two words, the code takes the first two letters of each word.
      case 2:
        birdName = birdName.match(/\b[\w]{2}/g);
        break;
      // If the name is made up of three words, the code is created by taking the first letter from
      // the first two words and the first two letters from the third word.
      case 3:
        birdName = birdName.match(
          /(?<=(?:\w+\s){2})\w{2}|(?<=(?:\w+\s){1})\w{1}|^\w/g
        );
        break;
      // If the name is four words long, the code uses the first letter from all the words.
      case 4:
        birdName = birdName.match(/\b(\w)/g);
        break;
    }

    return birdName.join("").toUpperCase();
  });
}
