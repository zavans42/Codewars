/* CHALLENGE

Consider an array/list of sheep where some sheep may be missing from their place. We need a function 
that counts the number of sheep present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined

*/


/* EXAMPLE

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

countSheeps(array1), 17, "There are 17 sheeps in total"

*/

// ANSWER

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you

    return arrayOfSheep.filter((x) => x === true).length;

}