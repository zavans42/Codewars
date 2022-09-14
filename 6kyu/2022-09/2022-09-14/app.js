/* 

### The Vowel Code

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).


### Example

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

*/

// ANSWER

function streetFighterSelection(fighters, position, moves) {
  // list of the fighters we hover
  const listOfFighters = [];

  for (let i = 0; i < moves.length; i++) {
    let fighter = null;

    switch (moves[i]) {
      // keep the cursor at the top, if your cursor already at the top, otherwise move it downward
      case "up":
        position[0] === 0 ? (position[0] = 0) : position[0]--;
        break;
      // if your cursor already at the the left edge go to the right edge, otherwise move it left
      case "left":
        position[1] === 0 ? (position[1] = 5) : position[1]--;
        break;
      // if your cursor already at the right edge go to the left edge, otherwise move it right
      case "right":
        position[1] === 5 ? (position[1] = 0) : position[1]++;
        break;
      // keep the cursor at the bottom, if your cursor already at the bottom, otherwise move it upward
      case "down":
        position[0] === 1 ? (position[0] = 1) : position[0]++;
        break;
    }

    // get the currently 'hovered' fighter
    fighter = fighters[position[0]][position[1]];

    listOfFighters.push(fighter);
  }

  return listOfFighters;
}
