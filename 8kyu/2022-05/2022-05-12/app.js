/* CHALLENGE

The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. 
Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

*/

/* EXAMPLE

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

*/

// ANSWER

function magNumber(info) {
    const weapon = info[0];
    const numOfBullets = info[1] * 3;
    let magazines;

    switch (weapon) {
        case 'PT92':
            magazines = 17;
            break;
        case 'M4A1':
        case 'M16A2':
            magazines = 30;
            break;
        case 'PSG1':
            magazines = 5;
            break;
    }

    const numOfMag = Math.ceil(numOfBullets / magazines)
    return numOfMag
}