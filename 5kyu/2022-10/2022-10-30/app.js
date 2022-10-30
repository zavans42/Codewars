/*

Common Denominators
Tags: FUNDAMENTALS, ALGORITHMS, MATHEMATICS

1. DESCRIPTION

You will have a list of rationals in the form:
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 

where all numbers are positive ints. You have to produce a result in the form:
(N_1, D) ... (N_n, D) 

2. EXAMPLE

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

3. NOTE

Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.
Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

*/

function convertFrac(list) {
  const denoms = list.map((arr) => arr[1]);

  let base = Math.max(...denoms);
  let [LCM, i] = [base, 1];

  while (denoms.some((n) => LCM % n !== 0)) {
    LCM = base * (i + 1);
    i++;
  }

  return list
    .map((arr) => {
      let num = LCM / arr[1];
      return `(${arr.map((x) => x * num)})`;
    })
    .join("");
}
