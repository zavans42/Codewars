/* 

# CHALLENGE

A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then 
checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

# EXAMPLE

checkTheBucket(["stone", "stone", "stone", "stone", "stone"]) // false
checkTheBucket(["stone", "stone", "stone", "stone", "gold"]) // true
checkTheBucket(["gold", "stone", "stone", "stone", "stone"]) // true
checkTheBucket([]) // false
checkTheBucket(["stone", "stone", "stone", "gold", "gold"]) // true

*/

// ANSWER

function checkTheBucket(bucket) {
    return bucket.includes('gold') ? true : false
}