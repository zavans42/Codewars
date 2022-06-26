/* 

# CHALLENGE

Let's play! You have to return which player won! In case of a draw return Draw!.

# EXAMPLE

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

// ANSWER

const rps = (p1, p2) => {
    return p1 === p2 ? 'Draw!' :
        p1 === 'rock' && p2 === 'scissors' ? 'Player 1 won!' :
        p1 === 'paper' && p2 === 'rock' ? 'Player 1 won!' :
        p1 === 'scissors' && p2 === 'paper' ? 'Player 1 won!' :
        'Player 2 won!'
};