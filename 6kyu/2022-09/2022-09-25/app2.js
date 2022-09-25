/* 

### Password generator

You need to write a password generator that meets the following criteria:
1. 6 - 20 characters long
2. contains at least one lowercase letter
3. contains at least one uppercase letter
4. contains at least one number
5. contains only alphanumeric characters (no special characters)
6. Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.


### Example


### ANSWER

*/

function passwordGen(
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = lowercase.toUpperCase(),
  numbers = "1234567890"
) {
  let guaranteedLow = lowercase[Math.floor(Math.random() * lowercase.length)];
  let guaranteedUp = uppercase[Math.floor(Math.random() * uppercase.length)];
  let guaranteedNum = numbers[Math.floor(Math.random() * numbers.length)];

  // at least one of lowercase, uppercase, and number
  let guaranteed = [guaranteedLow, guaranteedUp, guaranteedNum];

  // length of password
  const passLength = Math.floor(Math.random() * 15) + 3;

  return [...Array(passLength).keys()]
    .map((x) => {
      // get either lowercase, uppercase, or number
      const random = Math.floor(Math.random() * 3);

      switch (random) {
        // case lowercase
        case 0:
          let randLowercase = Math.floor(Math.random() * lowercase.length);
          return lowercase[randLowercase];
        // case uppercase
        case 1:
          let randUppercase = Math.floor(Math.random() * uppercase.length);
          return uppercase[randUppercase];
        // case number
        case 2:
          let randNums = Math.floor(Math.random() * numbers.length);
          return numbers[randNums];
      }
    })
    .concat(guaranteed)
    .join("");
}
