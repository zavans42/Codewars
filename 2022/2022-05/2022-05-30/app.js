/* CHALLENGE

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

*/

/* EXAMPLE

defineSuit('Q♠') // 'spades'
defineSuit('9♦') // 'diamonds'
defineSuit('J♥') // 'hearts'

*/

// ANSWER

function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs'
    }
    if (card.includes('♦')) {
        return 'diamonds'
    }
    if (card.includes('♥')) {
        return 'hearts'
    }
    if (card.includes('♠')) {
        return 'spades'
    }
}