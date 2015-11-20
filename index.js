'use strict';

const fs = require('fs');
let cstate_fd = -1;

exports.disable = function disable(cb) {
  const target = new Buffer(4);
  target.fill(0);
  fs.open('/dev/cpu_dma_latency', 'w', (err, fd) => {
    if (err) return cb(err);
    cstate_fd = fd;
    fs.write(fd, target, 0, target.length, cb);
  });
};

exports.enable = function enable(db) {
  if (cstate_fd === -1) {
    return cb(new Error('C-state should be enabled'));
  }
  fs.close(cstate_fd, cb);
};
