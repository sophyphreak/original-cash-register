const cashSimplyNotEnough = (changeRequired, cashInDrawer) => {
  const totalCashInDrawer = cashInDrawer.reduce(
    (sum, current) => sum + current[1],
    0
  );
  if (changeRequired > totalCashInDrawer) {
    return true;
  }
  return false;
};

const makeInsufficientFundsObject = () => ({
  status: 'INSUFFICIENT_FUNDS',
  change: []
});

const makeCashRegisterClosedObject = cashInDrawer => ({
  status: 'CLOSED',
  change: cashInDrawer
});

module.exports = {
  cashSimplyNotEnough,
  makeInsufficientFundsObject,
  makeCashRegisterClosedObject
};
