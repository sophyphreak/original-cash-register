const createCashObject = (
  cid = [
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
    penny: cid[0][1] * 100,
    nickel: cid[1][1] * 20,
    dime: cid[2][1] * 10,
    quarter: cid[3][1] * 4,
    one: cid[4][1],
    five: cid[5][1] / 5,
    ten: cid[6][1] / 10,
    twenty: cid[7][1] / 20,
    oneHundred: cid[8][1] / 100
  };
  return result;
};

module.exports = {
  createCashObject
};
