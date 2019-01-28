const { createCashObject } = require('../createCashObject');

const moveDrawerToChange = (changeRequired, cidObject) => {
  let changeAmount = 0;
  let changeObject = createCashObject();
  while ((changeRequired - changeAmount) / 100 >= 1) {
    if (cidObject.oneHundred > 0) {
      cidObject.oneHundred--;
      changeObject.oneHundred++;
      changeAmount += 100;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 20 >= 1) {
    if (cidObject.twenty > 0) {
      cidObject.twenty--;
      changeObject.twenty++;
      changeAmount += 20;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 10 >= 1) {
    if (cidObject.ten > 0) {
      cidObject.ten--;
      changeObject.ten++;
      changeAmount += 10;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 5 >= 1) {
    if (cidObject.five > 0) {
      cidObject.five--;
      changeObject.five++;
      changeAmount += 5;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 1 >= 1) {
    if (cidObject.one > 0) {
      cidObject.one--;
      changeObject.one++;
      changeAmount += 1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.25 >= 1) {
    if (cidObject.quarter > 0) {
      cidObject.quarter--;
      changeObject.quarter++;
      changeAmount += 0.25;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.1 >= 1) {
    if (cidObject.dime > 0) {
      cidObject.dime--;
      changeObject.dime++;
      changeAmount += 0.1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.05 >= 1) {
    if (cidObject.nickel > 0) {
      cidObject.nickel--;
      changeObject.nickel++;
      changeAmount += 0.05;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.01 >= 1) {
    if (cidObject.penny > 0) {
      cidObject.penny--;
      changeObject.penny++;
      changeAmount += 0.01;
    } else {
      break;
    }
  }
  if (changeRequired - changeAmount > 0) {
    return 'INSUFFICIENT_FUNDS';
  } else if (
    cidObject.penny === 0 &&
    cidObject.nickel === 0 &&
    cidObject.dime === 0 &&
    cidObject.quarter === 0 &&
    cidObject.one === 0 &&
    cidObject.five === 0 &&
    cidObject.ten === 0 &&
    cidObject.twenty === 0 &&
    cidObject.oneHundred === 0
  ) {
    return 'CLOSED';
  } else {
    return changeObject;
  }
};

module.exports = {
  moveDrawerToChange
};
