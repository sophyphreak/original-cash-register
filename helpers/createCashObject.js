const createCashObject = (
  cashInDrawer = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]
) => {
  let result = {
    penny: cashInDrawer[0][1] * 100,
    nickel: cashInDrawer[1][1] * 20,
    dime: cashInDrawer[2][1] * 10,
    quarter: cashInDrawer[3][1] * 4,
    one: cashInDrawer[4][1],
    five: cashInDrawer[5][1] / 5,
    ten: cashInDrawer[6][1] / 10,
    twenty: cashInDrawer[7][1] / 20,
    oneHundred: cashInDrawer[8][1] / 100
  };
  return result;
};

module.exports = {
  createCashObject
};
