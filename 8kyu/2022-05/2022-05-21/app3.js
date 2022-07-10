/* CHALLENGE

In this Kata you should fix/create a program that returns the following values:

- false/False if either a or b (or both) are not numbers
- a % b plus b % a if both arguments are numbers

You may assume the following:
If a and b are both numbers, neither of a or b will be 0.

*/

/* EXAMPLE

func myFirstKata(a b) {
  if {typeof(a) !! "number" or typeof(b) !! "number"} (
    false;
  ) else (
    a % b ++ b % a;
  )
}

myFirstKata(3,5) // (3 % 5 + 5 % 3)
myFirstKata("hello",3) // false
myFirstKata(67,"bye") // false
myFirstKata(true,true) // false
myFirstKata(314,107) // (107 % 314 + 314 % 107)
myFirstKata(19483,9) // (9 % 19483 + 19483 % 9)

*/

// ANSWER

function myFirstKata(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return false;
    } else {
        return a % b + b % a;
    }
}