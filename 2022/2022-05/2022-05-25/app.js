/* CHALLENGE

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/

/* EXAMPLE

howMuchILoveYou(7) // "I love you"
howMuchILoveYou(3) // "a lot"
howMuchILoveYou(6) // "not at all"

*/

// ANSWER

const howMuchILoveYou = n => {
    let numOfPetals = n > 6 ? n % 6 : n;
    switch (numOfPetals) {
        case 1:
            numOfPetals = 'I love you'
            break;
        case 2:
            numOfPetals = 'a little'
            break;
        case 3:
            numOfPetals = 'a lot'
            break;
        case 4:
            numOfPetals = 'passionately'
            break;
        case 5:
            numOfPetals = 'madly'
            break;
        default:
            numOfPetals = 'not at all'
            break;
    }
    return numOfPetals
}