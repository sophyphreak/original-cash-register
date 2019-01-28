const { createCashObject } = require('../createCashObject');

const moveDrawerToChange = (changeRequired, cidObject) => {
  let changeAmount = 0;
  let changeObject = createCashObject();
  while (changeRequired < changeAmount) {
    while ((changeRequired - changeAmount) % 100 > 0) {
      if (cidObject.oneHundred > 0) {
        cidObject.oneHundred--;
        changeObject.oneHundred++;
        changeAmount += 100;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 20 > 0) {
      if (cidObject.twenty > 0) {
        cidObject.twenty--;
        changeObject.twenty++;
        changeAmount += 20;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 10 > 0) {
      if (cidObject.ten > 0) {
        cidObject.ten--;
        changeObject.ten++;
        changeAmount += 10;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 5 > 0) {
      if (cidObject.five > 0) {
        cidObject.five--;
        changeObject.five++;
        changeAmount += 5;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 1 > 0) {
      if (cidObject.one > 0) {
        cidObject.one--;
        changeObject.one++;
        changeAmount += 1;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 0.25 > 0) {
      if (cidObject.quarter > 0) {
        cidObject.quarter--;
        changeObject.quarter++;
        changeAmount += 0.25;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 0.1 > 0) {
      if (cidObject.dime > 0) {
        cidObject.dime--;
        changeObject.dime++;
        changeAmount += 0.1;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 0.05 > 0) {
      if (cidObject.nickel > 0) {
        cidObject.nickel--;
        changeObject.nickel++;
        changeAmount += 0.05;
      } else {
        break;
      }
    }
    while ((changeRequired - changeAmount) % 0.01 > 0) {
      if (cidObject.penny > 0) {
        cidObject.penny--;
        changeObject.penny++;
        changeAmount += 0.01;
      } else {
        break;
      }
    }
  }
};
