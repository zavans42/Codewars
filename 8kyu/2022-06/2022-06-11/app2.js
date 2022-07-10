/* 

# CHALLENGE

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, 
different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	                    price (cents)
n < 5	                    100
n >= 5 and n < 10	        95
n >= 10	                    90

# EXAMPLE

saleHotdogs(1) // 100
saleHotdogs(4) // 400
saleHotdogs(5) // 475
saleHotdogs(9) // 855
saleHotdogs(10) // 900
saleHotdogs(100) // 9000

*/

// ANSWER

function saleHotdogs(n) {
    if (n < 5) {
        return n * 100
    }
    if (n >= 10) {
        return n * 90
    }
    if (n >= 5 && n < 10) {
        return n * 95
    }
}