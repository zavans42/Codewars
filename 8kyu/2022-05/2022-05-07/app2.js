/* 

# CHALLENGE

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point

# EXAMPLE

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) // 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // 10
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // 0
points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) // 15
points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) // 12

*/

// ANSWER

function points(games) {
    let total = 0;

    games.forEach(x => {
        if (x[0] > x[2]) {
            total += 3;
        } else if (x[0] === x[2]) {
            total += 1;
        }
    })

    return total
}