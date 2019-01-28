const createChangeArray = changeObject => {
  let result = [];
  if (changeObject.oneHundred) {
    result.push(['ONE HUNDRED', changeObject.oneHundred * 100]);
  }
  if (changeObject.twenty) {
    result.push(['TWENTY', changeObject.twenty * 20]);
  }
  if (changeObject.ten) {
    result.push(['TEN', changeObject.ten * 10]);
  }
  if (changeObject.five) {
    result.push(['FIVE', changeObject.five * 5]);
  }
  if (changeObject.one) {
    result.push(['ONE', changeObject.one]);
  }
  if (changeObject.quarter) {
    result.push(['QUARTER', changeObject.quarter / 4]);
  }
  if (changeObject.dime) {
    result.push(['DIME', changeObject.dime / 10]);
  }
  if (changeObject.nickel) {
    result.push(['NICKEL', changeObject.nickel / 20]);
  }
  if (changeObject.penny) {
    result.push(['PENNY', changeObject.penny / 100]);
  }
  return result;
};

module.exports = {
  createChangeArray
};

// ['PENNY', cidObject.penny / 100],
// ['NICKEL', cidObject.nickel / 20],
// ['DIME', cidObject.dime / 10],
// ['QUARTER', cidObject.quarter / 4],
// ['ONE', cidObject.one],
// ['FIVE', cidObject.five * 5],
// ['TEN', cidObject.ten * 10],
// ['TWENTY', cidObject.twenty * 20],
// ['ONE HUNDRED', cidObject.oneHundred * 100]
