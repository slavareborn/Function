'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const i = (result, object) => (result << 8) + parseInt(object);
  return ip.split('.').reduce(i, 0);
};

module.exports = { ipToInt };
