/* 

# CHALLENGE

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

# EXAMPLE

excludingVatPrice(230) // 200.00
excludingVatPrice(123) // 106.96

*/

// ANSWER

function excludingVatPrice(price) {
    if (price === null) {
        return -1
    }

    const VAT = 1.15;
    return +(price / VAT).toFixed(2);
}