const { EventEmitter } = require('events');

function tickTock() {
  const ee = new EventEmitter();

  setInterval(() => {
    ee.emit('secondElapsed', 'Test');
  }, 1000);

  setInterval(() => {
    ee.emit('threeSecondsElapsed');
  }, 3000);

  return ee;
}

module.exports = {
  tickTock,
};
