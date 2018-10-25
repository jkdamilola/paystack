'use strict';

var root = '/transferrecipient';

module.exports = {

  /*
  Initiate transfer recipient
  @param: type, name, metadata, account_number, bank_code, currency, description
  */
  create: {
    method: 'post',
    endpoint: root,
    params: ['type*', 'name*', 'metadata', 'account_number*', 'bank_code*', 'currency', 'description']
  },

  /*
  List transfer recipients
  */
  list: {
    method: 'get',
    endpoint: root
  }
};
