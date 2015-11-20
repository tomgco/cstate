const cstate = require('./intel-no-cstate');

cstate.disable((err) => {
  if (err) {
    console.error('This application requires super user privileges');
    throw err;
  }
  console.log('For the lifetime of this application all c-states will be disabled.');
  console.log('Use Ctrl-C to quit.');
  process.stdin.resume();
});
