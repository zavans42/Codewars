/* 

# CHALLENGE

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

# EXAMPLE

pillars(1, 10, 10) // 0
pillars(2, 20, 25) // 2000
pillars(11, 15, 30) // 15270

*/

// ANSWER

function pillars(num_pill, dist, width) {
    return num_pill === 1 ? 0 :
        num_pill === 2 ? dist * 100 :
        (dist * (num_pill - 1) * 100) + width * (num_pill - 2)
}