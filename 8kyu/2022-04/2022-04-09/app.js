/* CHALLENGE

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

*/


/* EXAMPLE

litres(2) // 1, 'should return 1 litre'
litres(1.4) // 0, 'should return 0 litres'
litres(12.3) // 6, 'should return 6 litres'
litres(0.82) // 0, 'should return 0 litres'
litres(11.8) // 5, 'should return 5 litres'
litres(1787) // 893, 'should return 893 litres'
litres(0) // 0, 'should return 0 litres'

*/

// ANSWER


function litres(time) {

    let liter = 0;
    for (let i = 1; i < Math.floor(time); i += 2) {
        liter += 1;
    }

    return liter;
}