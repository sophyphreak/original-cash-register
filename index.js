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

const checkCashRegister = (price, cash, cashInDrawer) => {
  const changeRequired = cash - price;
  const insufficientFundsObject = makeInsufficientFundsObject();
  const cashRegisterClosedObject = makeCashRegisterClosedObject(cashInDrawer);
  if (cashSimplyNotEnough(changeRequired, cashInDrawer)) {
    // if the sum of cashInDrawer is less than change required
    return insufficientFundsObject;
  }
  let cashInDrawerObject = createCashObject(cashInDrawer);
  const changeObject = moveDrawerToChange(changeRequired, cashInDrawerObject);
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

module.exports = {
  checkCashRegister
};
