/* 

# CHALLENGE

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

# EXAMPLE

lovefunc(1,4) // true
lovefunc(2,2) // false
lovefunc(0,1) // true
lovefunc(0,0) // false

*/

// ANSWER

function lovefunc(flo1, flo2) {

    const isEven = x => x % 2 === 0 ? true : false;
    const isOdd = x => x % 2 !== 0 ? true : false;

    if ((isEven(flo1) && isOdd(flo2) || (isOdd(flo1) && isEven(flo2)))) {
        return true;
    } else {
        return false;
    }
}