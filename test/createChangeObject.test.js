const expect = require('chai').expect;

const { createChangeArray } = require('../helpers/createChangeArray');

describe('createChangeArray()', () => {
  it('should turn change object into change array', () => {
    const changeObject = {
      penny: 1.01,
      nickel: 2.05,
      dime: 1.1,
      quarter: 23.25,
      one: 2,
      five: 10,
      ten: 100,
      twenty: 40,
      oneHundred: 10
    };
    const changeArray = createChangeArray(changeObject);
    expect(changeArray).to.eql([
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 1.1],
      ['QUARTER', 23.25],
      ['ONE', 2],
      ['FIVE', 10],
      ['TEN', 100],
      ['TWENTY', 40],
      ['ONE HUNDRED', 10]
    ]);
  });
});
