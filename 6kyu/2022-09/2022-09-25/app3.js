/* 

### Word Mesh

You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

Examples of meshed words:
- "apply" and "plywood"
- "apple" and "each"

Examples of words that do not mesh:
- "apply" and "playground"
- "apple" and "peggy"


### Example

["allow", "lowering", "ringmaster", "terror"] --> "lowringter"
["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"


### ANSWER

*/

function wordMesh(arr) {
  const mesh = arr.join(" ").match(/(\w+)(?= \1)/g);
  return mesh.length === arr.length - 1 ? mesh.join("") : "failed to mesh";
}
