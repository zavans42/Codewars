/* 

### Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.

### Example

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

// ANSWER

function cleanString(s) {
  return s
    .split("")
    .reduce((pr, cr) => {
      cr === "#" ? pr.pop() : pr.push(cr);
      return pr;
    }, [])
    .join("");
}
