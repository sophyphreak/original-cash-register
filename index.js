const {
  cashSimplyNotEnough,
  makeInsufficientFundsObject,
  makeCashRegisterClosedObject
} = require('./helpers/helpers');
const { createCashObject } = require('./helpers/createCashObject');
const { createChangeArray } = require('./helpers/createChangeArray');
const {
  moveDrawerToChange
} = require('./helpers/moveDrawerToChange/moveDrawerToChange');

const checkCashRegister = (price, cash, cid) => {
  // cid is "cash in drawer"
  const changeRequired = cash - price;
  const insufficientFundsObject = makeInsufficientFundsObject();
  const cashRegisterClosedObject = makeCashRegisterClosedObject(cid);
  if (cashSimplyNotEnough(changeRequired, cid)) {
    // if the sum of cid is less than change required
    return insufficentFundsObject;
  }
  let cidObject = createCashObject(cid);
  const changeObject = moveDrawerToChange(changeRequired, cidObject);
  if (changeObject === 'INSUFFICIENT_FUNDS') {
    return insufficientFundsObject;
  } else if (changeObject === 'CLOSED') {
    return cashRegisterClosedObject;
  } else {
    const changeArray = createChangeArray(changeObject);
    return {
      status: 'OPEN',
      change: changeArray
    };
  }
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

console.log(
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
  ])
);

module.exports = {
  checkCashRegister
};
