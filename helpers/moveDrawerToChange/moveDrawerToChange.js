const { createCashObject } = require('../createCashObject');

const moveDrawerToChange = (changeRequired, cashInDrawerObject) => {
  let changeAmount = 0;
  let changeObject = createCashObject();
  while ((changeRequired - changeAmount) / 100 >= 1) {
    if (cashInDrawerObject.oneHundred > 0) {
      cashInDrawerObject.oneHundred--;
      changeObject.oneHundred++;
      changeAmount += 100;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 20 >= 1) {
    if (cashInDrawerObject.twenty > 0) {
      cashInDrawerObject.twenty--;
      changeObject.twenty++;
      changeAmount += 20;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 10 >= 1) {
    if (cashInDrawerObject.ten > 0) {
      cashInDrawerObject.ten--;
      changeObject.ten++;
      changeAmount += 10;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 5 >= 1) {
    if (cashInDrawerObject.five > 0) {
      cashInDrawerObject.five--;
      changeObject.five++;
      changeAmount += 5;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 1 >= 1) {
    if (cashInDrawerObject.one > 0) {
      cashInDrawerObject.one--;
      changeObject.one++;
      changeAmount += 1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.25 >= 1) {
    if (cashInDrawerObject.quarter > 0) {
      cashInDrawerObject.quarter--;
      changeObject.quarter++;
      changeAmount += 0.25;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.1 >= 1) {
    if (cashInDrawerObject.dime > 0) {
      cashInDrawerObject.dime--;
      changeObject.dime++;
      changeAmount += 0.1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.05 >= 1) {
    if (cashInDrawerObject.nickel > 0) {
      cashInDrawerObject.nickel--;
      changeObject.nickel++;
      changeAmount += 0.05;
    } else {
      break;
    }
  }
  while (changeRequired - changeAmount > 0) {
    if (cashInDrawerObject.penny > 0) {
      cashInDrawerObject.penny--;
      changeObject.penny++;
      changeAmount += 0.01;
    } else {
      break;
    }
  }
  if (changeRequired - changeAmount > 0) {
    return 'INSUFFICIENT_FUNDS';
  } else if (
    cashInDrawerObject.penny === 0 &&
    cashInDrawerObject.nickel === 0 &&
    cashInDrawerObject.dime === 0 &&
    cashInDrawerObject.quarter === 0 &&
    cashInDrawerObject.one === 0 &&
    cashInDrawerObject.five === 0 &&
    cashInDrawerObject.ten === 0 &&
    cashInDrawerObject.twenty === 0 &&
    cashInDrawerObject.oneHundred === 0
  ) {
    return 'CLOSED';
  } else {
    return changeObject;
  }
};

module.exports = {
  moveDrawerToChange
};
