/* CHALLENGE

Write function bmi that calculates body mass index (bmi = weight / height2).

*/


/* EXAMPLE

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

*/

// ANSWER

const bmi = (weight, height) => {
    const bmiVal = weight / Math.pow(height, 2);
    let result;

    switch (true) {
        case bmiVal <= 18.5:
            result = 'Underweight';
            break;
        case bmiVal <= 25:
            result = 'Normal';
            break;
        case bmiVal <= 30:
            result = 'Overweight';
            break;
        case bmiVal > 30:
            result = 'Obese';
            break;
    }

    return result

}