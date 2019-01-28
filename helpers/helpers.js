const cashSimplyNotEnough = (changeRequired, cid) => {
  const totalCashInDrawer = cid.reduce((sum, current) => sum + current[1], 0);
  if (changeRequired > totalCashInDrawer) {
    return true;
  }
  return false;
};

const makeInsufficientFundsObject = () => ({
  status: 'INSUFFICIENT_FUNDS',
  change: []
});

module.exports = {
  cashSimplyNotEnough,
  makeInsufficientFundsObject
};
