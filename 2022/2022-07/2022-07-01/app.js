/* 

# CHALLENGE

The Math.min function has stopped working, so we have to use our own function. We are off to a good start, 
but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for 
anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}

# EXAMPLE

min(1, -2.5) === -2.5 // 'Return the minimum of the two arguments'
isNaN(min(1.5, NaN)) // 'Any NaN value should return NaN'
isNaN(min(1.5, undefined)) // 'Any undefined value should return NaN'
min(-Infinity, Infinity) === -Infinity // 'Infinity should be handled like normal numbers'
min(null, 2.5) === 0 // 'treat null as if it were 0'

*/

// ANSWER

function min(a, b) {

    if (isNaN(a) === true || isNaN(b) === true) return NaN
    if (a === null) a = 0;
    if (b === null) b = 0;

    return (a < b) ? a : b;
}