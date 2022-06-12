/* 

# CHALLENGE

Create a function that takes a number as an argument and returns a grade based on that number

# EXAMPLE

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"

*/

// ANSWER

function grader(score) {
    if (score > 1 || score < 0.6) {
        return "F";
    } else if (score >= 0.9) {
        return "A";
    } else if (score >= 0.8) {
        return "B";
    } else if (score >= 0.7) {
        return "C";
    } else {
        return "D"
    }
}