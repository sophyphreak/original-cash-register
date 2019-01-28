const { expect } = require('chai');

const { createCashObject } = require('../helpers/createCashObject');

describe('createCashObject()', () => {
  it('should return a cash object with all zeros', () => {
    const allZeros = createCashObject();
    expect(allZeros).to.eql({
      penny: 0,
      nickel: 0,
      dime: 0,
      quarter: 0,
      one: 0,
      five: 0,
      ten: 0,
      twenty: 0,
      oneHundred: 0
    });
  });
  it('should return a cash object with the correct amounts', () => {
    const cashArray = [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100]
    ];
    const cashObject = createCashObject(cashArray);
    expect(cashObject).to.eql({
      penny: 1.01,
      nickel: 2.05,
      dime: 3.1,
      quarter: 4.25,
      one: 90,
      five: 55,
      ten: 20,
      twenty: 60,
      oneHundred: 100
    });
  });
});
