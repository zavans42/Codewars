/* 

### Buying a car

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?


### Example

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

Detail of the above example:
end month 1: percent_loss 1.5 available -4910.0
end month 2: percent_loss 2.0 available -3791.7999...
end month 3: percent_loss 2.0 available -2675.964
end month 4: percent_loss 2.5 available -1534.06489...
end month 5: percent_loss 2.5 available -395.71327...
end month 6: percent_loss 3.0 available 766.158120825...
return [6, 766] or (6, 766)

where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).


### ANSWER

*/

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let saving = 0;
  let i = 0;

  while (startPriceOld + saving < startPriceNew) {
    // percent of loss increases of 0.5 percent at the end of every two months
    if (i % 2) {
      percentLossByMonth += 0.5;
    }

    saving += savingperMonth;

    // the prices of his old car and of the new one decrease of 1.5 percent per month
    startPriceOld *= (100 - percentLossByMonth) / 100;
    startPriceNew *= (100 - percentLossByMonth) / 100;

    i++;
  }

  return [i, Math.round(startPriceOld + saving - startPriceNew)];
}
