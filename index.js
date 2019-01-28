const {
  cashSimplyNotEnough,
  makeInsufficientFundsObject
} = require('./helpers/helpers');
const { createCashObject } = require('./helpers/createCashObject');
const { createChangeArray } = require('./helpers/createChangeArray');
const {
  moveDrawerToChange
} = require('./helpers/moveDrawerToChange/moveDrawerToChange');

checkCashRegister = (price, cash, cid) => {
  // cid is "cash in drawer"
  const changeRequired = cash - price;
  const insufficentFundsObject = makeInsufficientFundsObject();
  if (cashSimplyNotEnough(changeRequired, cid)) {
    // if the sum of cid is less than change required
    return insufficentFundsObject;
  }
  let cidObject = createCashObject(cid);
  const changeObject = moveDrawerToChange(changeRequired, cidObject);
};

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
