/* CHALLENGE

The first century spans from the year 1 up to and including the year 100, the second century - 
from the year 101 up to and including the year 200, etc.

*/


/* EXAMPLE

century(1705) // 18, 'Testing for year 1705');
century(1900) // 19, 'Testing for year 1900');
century(1601) // 17, 'Testing for year 1601');
century(2000) // 20, 'Testing for year 2000');
century(89) // 1, 'Testing for year 89');

*/

// ANSWER


function century(year) {
    // Finish this :)
    return Math.ceil(year / 100);
}