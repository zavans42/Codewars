/* 

### Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

### Example

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False


### ANSWER

*/

function scramble(str1, str2) {
  const chars = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    chars[char] ? chars[char]++ : (chars[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (chars[char]) {
      chars[char]--;
    } else {
      return false;
    }
  }
  return true;
}
