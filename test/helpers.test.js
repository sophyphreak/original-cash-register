const expect = require('chai').expect;

const {
  cashSimplyNotEnough,
  makeInsufficientFundsObject,
  makeCashRegisterClosedObject
} = require('../helpers/helpers');

const cid = [
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

describe('cashSimplyNotEnough()', () => {
  it('should return false because it is enough', () => {
    const enough = cashSimplyNotEnough(10, cid);
    expect(enough).to.equal(false);
  });
  it('should return true because it is not enough', () => {
    const notEnough = cashSimplyNotEnough(10000, cid);
    expect(notEnough).to.equal(true);
  });
});

describe('makeInsufficientFundsObject()', () => {
  it('should return an insufficient funds object', () => {
    const insufficientFunds = makeInsufficientFundsObject();
    expect(insufficientFunds).to.eql({
      status: 'INSUFFICIENT_FUNDS',
      change: []
    });
  });
});

describe('makeCashRegisterClosedObject()', () => {
  it('should return a closed status object with correct change', () => {
    const cid = [
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
    const closedWithCorrectChange = makeCashRegisterClosedObject(cid);
    expect(closedWithCorrectChange).to.eql({
      status: 'CLOSED',
      change: [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ]
    });
  });
});
