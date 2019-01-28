const createChangeArray = cidObject => {
  let result = [
    ['PENNY', cidObject.penny / 100],
    ['NICKEL', cidObject.nickel / 20],
    ['DIME', cidObject.dime / 10],
    ['QUARTER', cidObject.quarter / 4],
    ['ONE', cidObject.one],
    ['FIVE', cidObject.five * 5],
    ['TEN', cidObject.ten * 10],
    ['TWENTY', cidObject.twenty * 20],
    ['ONE HUNDRED', cidObject.oneHundred * 100]
  ];
  return result;
};

module.exports = {
  createChangeArray
};
