/* 

### Kebabize

Modify the kebabize function so that it converts a camel case string into a kebab case.

Notes:
the returned string should only contain lowercase letters


### Example

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

*/

// ANSWER

function kebabize(str) {
  console.log(str);

  return str
    .replace(/([A-Z])/g, (x) => `-${x.toLowerCase()}`)
    .replace(/\d/g, "")
    .replace(/^-/g, "");
}
