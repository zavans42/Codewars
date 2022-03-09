/* CHALLENGE

Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

BAC calculator Formula:
BAC% = (A × 5.14 / W × r) - .015 × H 

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
*/

/* EXAMPLE

bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1) // 0.0837
bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1) // 0.1758

*/

// ANSWER

function bloodAlcoholContent(drinks, weight, sex, time) {
    const alcoholDistribution = sex === 'male' ? 0.73 : 0.66;
    return +((drinks.ounces * drinks.abv * 5.14 / weight * alcoholDistribution) - 0.015 * time).toFixed(4);
}