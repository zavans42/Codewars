/*

Best travel
Tags: FUNDAMENTALS

1. DESCRIPTION

John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?


2. EXAMPLE

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

*/

function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null;
  ls.sort((a, b) => a - b);
  let best = 0;
  req();
  return best || null;

  function req(arr = []) {
    if (arr.length == k) {
      const sum = arr.reduce((s, c) => s + ls[c], 0);
      if (sum > t) return;
      if (sum > best) best = sum;
      return;
    }
    for (let i = arr[arr.length - 1] || 0; i < ls.length; i += 1) {
      if (!arr.includes(i)) {
        const result = req(arr.concat(+i));
      }
    }
  }
}
