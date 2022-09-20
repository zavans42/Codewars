/* 

### String subpattern recognition I

In this kata you need to build a function to return either true/True or false/False if a string can be seen as 
the repetition of a simpler/shorter subpattern or not.

Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) 
and can be pretty long (keep an eye on performances!).


### Example

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern


*/

// ANSWER

function hasSubpattern(string) {
  return /\b(.+)\1+\b/.test(string);
}
