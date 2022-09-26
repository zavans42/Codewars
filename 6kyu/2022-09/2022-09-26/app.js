/* 

### Trumpness detector

We need to create a function to detect the original and unique rhythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the establishment.
The index is calculated based on how many vowels are repeated more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

Round each result by two decimal digits: there is no place for small fry in Trump's America.


### Example

trumpDetector("I will build a huge wall")==0 #definitely not our trump: 0 on the trump score
trumpDetector("HUUUUUGEEEE WAAAAAALL")==4 #4 extra "U", 3 extra "E" and 5 extra "A" on 3 different vowel groups: 12/3 make for a trumpy trumping score of 4: not bad at all!
trumpDetector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT")==1.56 //14 extra vowels on 9 base ones


### ANSWER

*/

function trumpDetector(trumpySpeech) {
  // match all base vowels
  const baseVowels = trumpySpeech.match(/([aiueo])(?!\1)/gi);
  // match all extra vowels
  const extraVowels = trumpySpeech.match(/(?<=([aiueo]))\1/gi);

  // no extra vowels
  if (!extraVowels) {
    return 0;
  }

  let result = extraVowels.length / baseVowels.length;

  // check if result is integer, otherwise round it by two decimal digits
  return Number.isInteger(result) ? result : +result.toFixed(2);
}
