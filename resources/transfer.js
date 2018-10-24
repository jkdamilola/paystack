'use strict';

var root = '/transfer';

module.exports = {

  /*
  Create transfer
  @param: source, amount, currency, reason, recipient, reference
  */
  create: {
    method: 'post',
    endpoint: root,
    params: ['source*', 'amount*', 'currency', 'reason', 'recipient*', 'reference']
  },

  /*
  List transfers
  */
  list: {
    method: 'get',
    endpoint: root
  }
};
