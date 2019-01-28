const createChangeArray = cidObject => {
  let result = [
    ['PENNY', cidObject.penny],
    ['NICKEL', cidObject.nickel],
    ['DIME', cidObject.dime],
    ['QUARTER', cidObject.quarter],
    ['ONE', cidObject.one],
    ['FIVE', cidObject.five],
    ['TEN', cidObject.ten],
    ['TWENTY', cidObject.twenty],
    ['ONE HUNDRED', cidObject.oneHundred]
  ];
  return result;
};

module.exports = {
  createChangeArray
};
