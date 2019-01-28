const {
  cashSimplyNotEnough,
  makeInsufficientFundsObject
} = require('./helpers/helpers');
const { createCashObject } = require('./helpers/createCashObject');
const { createChangeArray } = require('./helpers/createChangeArray');

function checkCashRegister(price, cash, cid) {
  // cid is "cash in drawer"
  const changeRequired = cash - price;
  const insufficentFundsObject = makeInsufficientFundsObject();
  if (cashSimplyNotEnough(changeRequired, cid)) {
    // if the sum of cid is less than change required
    return insufficentFundsObject;
  }
  let cidObect = createCashObject(cid);
  let changeAmount = 0;
  let changeObject = createCashObject();
  while (changeRequired < changeAmount) {
    while ((changeRequired - changeAmount) % 100 > 0) {
      if (cidObect.oneHundred > 0) {
        cidObect.oneHundred--;
      }
    }
    while ((changeRequired - changeAmount) % 20 > 0) {}
    while ((changeRequired - changeAmount) % 10 > 0) {}
    while ((changeRequired - changeAmount) % 5 > 0) {}
    while ((changeRequired - changeAmount) % 1 > 0) {}
    while ((changeRequired - changeAmount) % 0.25 > 0) {}
    while ((changeRequired - changeAmount) % 0.1 > 0) {}
    while ((changeRequired - changeAmount) % 0.05 > 0) {}
    while ((changeRequired - changeAmount) % 0.01 > 0) {}
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]);

module.exports = {
  checkCashRegister
};
