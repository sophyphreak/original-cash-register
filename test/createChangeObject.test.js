const expect = require('chai').expect;

const { createChangeArray } = require('../helpers/createChangeArray');

describe('createChangeArray()', () => {
  it('should turn change object into change array', () => {
    const changeObject = {
      penny: 101,
      nickel: 205,
      dime: 11,
      quarter: 232,
      one: 20,
      five: 10,
      ten: 10,
      twenty: 4,
      oneHundred: 1
    };
    const changeArray = createChangeArray(changeObject);
    expect(changeArray).to.eql([
      ['ONE HUNDRED', 100],
      ['TWENTY', 80],
      ['TEN', 100],
      ['FIVE', 50],
      ['ONE', 20],
      ['QUARTER', 58],
      ['DIME', 1.1],
      ['NICKEL', 10.25],
      ['PENNY', 1.01]
    ]);
  });
});
