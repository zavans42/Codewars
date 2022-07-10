/* CHALLENGE

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


Numerical Score	                    Letter Grade
90 <= score <= 100	                'A'
80 <= score < 90	                'B'
70 <= score < 80	                'C'
60 <= score < 70	                'D'
0 <= score < 60	                    'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

/* EXAMPLE

getGrade(100,85,96) // 'A'
getGrade(92,93,94) // 'A'
getGrade(60,82,76) // 'C'
getGrade(48,55,52) // 'F'

*/

// ANSWER

function getGrade(s1, s2, s3) {
    // Code here
    const average = (s1 + s2 + s3) / 3;

    return average < 60 ? 'F' :
        average < 70 ? 'D' :
        average < 80 ? 'C' :
        average < 90 ? 'B' :
        'A'
}