'use strict';

const methods = iface => {
  
  const names = [];
  for (const name in iface) {
    const x = iface[name];
    if (typeof x === 'function') {
      names.push([name, x.length]);
    }
  }
  return names;
};

module.exports = { methods };
