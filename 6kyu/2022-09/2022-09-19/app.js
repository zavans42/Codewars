/* 

### Autocomplete! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.


### Example

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']


*/

// ANSWER

function autocomplete(input, dictionary) {
  // remove the non letter & create regex to match letter in the input
  const re = new RegExp(`^${input.replace(/[^a-z]/g, "")}`, "i");

  // return first five word that matches the regex
  return dictionary.filter((x) => re.test(x)).slice(0, 5);
}
